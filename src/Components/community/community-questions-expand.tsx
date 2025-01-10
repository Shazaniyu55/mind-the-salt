import React, { useEffect, useState } from 'react';
import HeaderProfile from './headerProfile';
import Bold from '@/utils/Bold';
import { Divider, IconButton, TextField, Button } from '@mui/material';
import UpvoteDownVote from './upvote-downvote';
import Comment from './comment';
import ScrollBar from 'react-perfect-scrollbar';
import { useRouter } from 'next/router';
import useInnerWidth from '../pub/Hooks/useInnerWidth';
import { Post } from './community.interface';
import { getTimeAgoString } from '@/Logics/date';
import { ArrowRight, Trash2, Edit2 } from 'react-feather';
import toast from 'react-hot-toast';
import { deleteData } from '@/Logics/deleteData';
import useUser from '../hooks/useUser';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { setData as setEditorHeaderData } from '@/features/dataSlice';
import { updateData } from '@/Logics/updateData';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CommunityQuestionExpand: React.FC = () => {
  const route = useRouter();
  const width = useInnerWidth();
  const { user } = useUser();
  const [BodySide_, setBodySide_] = useState<any>(<></>);
  const dispatch: AppDispatch = useDispatch();
  const [postComments, setPostComments] = useState<Post[] | any>([]);
  const [currentCommunityPost, setCurrentCommunityPost] = useState<Post>();
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editedPost, setEditedPost] = useState<{ heading: string; htmlBody: string }>({
    heading: '',
    htmlBody: '',
  });

  useEffect(() => {
    const getComponent = async () => {
      const { default: BodySide } = await import('../side/bodySide');
      if (width < 1024) setBodySide_(<BodySide />);
    };
    getComponent();

    if (sessionStorage.currentCommunityPost) {
      const post: Post = JSON.parse(sessionStorage.currentCommunityPost);
      setCurrentCommunityPost(post);
      setEditedPost({ heading: post.heading, htmlBody: post.htmlBody });
      addPostView(post);
    } else {
      route.back();
    }
    dispatch(setEditorHeaderData('Write comment'));
  }, []);

  async function addPostView(currentCommunityPost: Post) {
    await updateData('CommunityQuestions', currentCommunityPost?.docId || '', {
      ...currentCommunityPost,
      views: typeof currentCommunityPost.views !== 'number' ? 1 : (currentCommunityPost?.views as number) + 1,
    });
    console.log('view added successfully', Number(currentCommunityPost?.views || 0));
  }

  const deletePost = async () => {
    const id = toast.loading('Deleting post...');
    try {
      await deleteData('CommunityQuestions', (currentCommunityPost?.docId || '') as string);
      toast.success('Delete successful');
      route.back();
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong');
    } finally {
      toast.dismiss(id);
    }
  };

  const handleEditSubmit = async () => {
    const id = toast.loading('Updating post...');
    try {
      await updateData('CommunityQuestions', currentCommunityPost?.docId || '', {
        ...currentCommunityPost,
        heading: editedPost.heading,
        htmlBody: editedPost.htmlBody,
      });
      setCurrentCommunityPost((prev) => ({ ...prev, ...editedPost }));
      toast.success('Post updated successfully');
      setEditModalOpen(false);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to update post');
    } finally {
      toast.dismiss(id);
    }
  };

  return (
    <ScrollBar style={{ height: '86vh' }}>
      <div style={{ padding: 10 }}>
        <div className="myContainer">
          <HeaderProfile
            timeAgo={getTimeAgoString(currentCommunityPost?.createdAt as string)}
            profile={currentCommunityPost?.profile?.picture}
            username={currentCommunityPost?.profile?.nickname}
            backButton={() => {
              route.push('/community');
            }}
            sideButton={
              currentCommunityPost?.profile?.sid === user?.sid && (
                <>
                  <IconButton onClick={() => setEditModalOpen(true)}>
                    <Edit2 />
                  </IconButton>
                  <IconButton onClick={deletePost}>
                    <Trash2 />
                  </IconButton>
                </>
              )
            }
          />
          <Divider />
          <br />
          <h3>
            <Bold>{currentCommunityPost?.heading}</Bold>
          </h3>
          <section style={{ fontSize: '15px' }}>
            <div dangerouslySetInnerHTML={{ __html: currentCommunityPost?.htmlBody as string }} />
          </section>
          <br />
          <div>
            <UpvoteDownVote comments={postComments} post={currentCommunityPost} />
          </div>
          <br />
          <Divider />
          <Comment setPostComments={setPostComments} post={currentCommunityPost} />
        </div>
      </div>
      <br />
      {width < 1024 && BodySide_}

      {/* Edit Modal */}
      <Modal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h3>Edit Post</h3>
          <TextField
            label="Heading"
            fullWidth
            value={editedPost.heading}
            onChange={(e) => setEditedPost({ ...editedPost, heading: e.target.value })}
            margin="normal"
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={editedPost.htmlBody}
            onChange={(e) => setEditedPost({ ...editedPost, htmlBody: e.target.value })}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Box>
      </Modal>
    </ScrollBar>
  );
};

export default CommunityQuestionExpand;
