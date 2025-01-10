import React, { useState, useEffect } from 'react'
import { BlogProps } from '../blogs/blog.interface';
import Bold from '@/utils/Bold';
import Loader from '@/utils/Loader';
import { formats, modules } from '../community/PostQuestion';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { uploadToFirebase } from '@/Logics/date';
import toast from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';
import { getCurrentTimestamp } from '@/Logics/DateFunc';
import useUser from '../hooks/useUser';
import { AddData } from '@/Logics/addData';
import { collection } from 'firebase/firestore';
import { db } from '@/firebase.config';






interface Props{
uploadSuccessCallback?:()=>void
}
const CreateBlog: React.FC<Props> = ({uploadSuccessCallback}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [editor, setEditor] = useState<React.ReactNode>(<Loader />);
    const {user}=useUser();
    const [data, setData] = useState<BlogProps>({
        heading: "",
        htmlBody: "",
        textBody: "",
        createdAt: "",
        image: "",
        updatedAt: "",
        postedBy: ""
    })

    const handleEditorChange = (content: any, delta: any, source: any, editor: any) => {
        data.htmlBody = editor.getHTML()
        data.textBody = editor.getText()
        setData({ ...data})

    }


    useEffect(() => {
        async function getEditor() {
            const { default: ReactQuill } = await import("react-quill");
            setEditor(<ReactQuill className='editorClass' modules={modules}
                formats={formats} placeholder='write blog post body here' theme="snow" value={data.htmlBody} onChange={handleEditorChange} />)
        }
        getEditor();
    }, [])

    const [isUploading, setIsUploading] = useState<boolean>(false);
    const uploadImage = async (file: File) => {
        try {
            setIsUploading(true);
            await uploadToFirebase(file, {
                success: (url) => {
                    console.log(url);
                    setData({ ...data, image: url });
                },
                error: (error) => {
                    console.log(error);
                    toast.error(error?.message || "Something went wrong");
                }
            });
        }
        catch (err: any) {
            toast.error(err?.message || "Something went wring")
        }
        finally {
            setIsUploading(false);
        }

    }

    const handleImageUpload=(e:any)=>{
const {target:{files}}=e;
uploadImage(files[0])
    }


    const validateData = (data:BlogProps) => {
        let isValid = true;
    
        if (!data.heading) {
          toast.error("Heading is required");
         return isValid = false;
        }
        if (!data.htmlBody) {
          toast.error("HTML body is required");
        return  isValid = false;
        }
        if (!data.textBody) {
          toast.error("Text body is required");
        return  isValid = false;
        }
        if (data.textBody.split(" ").length < 1) {
            toast.error("Blog must have atleast 20 words");
          return  isValid = false;
          }
        if (!data.image) {
          toast.error("Image is required");
       return   isValid = false;
     
        }
    
        return isValid;
      };
    const submit=async ()=>{
        data.postedBy=user.sid
        data.createdAt=getCurrentTimestamp();
        if(validateData(data)){
            console.log(data);
            setIsLoading(true)
        try{
await AddData(collection(db,'blogs'),data);
toast.success("Blog uploaded successfully");
if(uploadSuccessCallback)uploadSuccessCallback();
setData({
    heading: "",
    htmlBody: "",
    textBody: "",
    createdAt: "",
    image: "",
    updatedAt: "",
    postedBy: ""
})
const editor_=editor;
setEditor(<></>)
setTimeout(()=>{
setEditor(editor_);
},0);
        }
        catch(Err:any){
toast.error(Err?.message || "Something went wrong");
        }
        finally{
setIsLoading(false)
        }
        }
    }
    return (

        <>

            <div className='createBlog'>
                <Bold>Create new Blog</Bold>
                <br />
                <MDBInput value={data.heading}  label="Enter your blog heading" onChange={(e) => {
                    const { target: { value } } = e;
                    setData({ ...data, heading: value });
                }} />
                <br />
                <label style={{ backgroundImage: `url(${data?.image}` }} className='blogImageLabel' htmlFor='selectImage'>
                {isUploading ? <ClipLoader color="#5D0E41" />:<span>   {data.image ? 'change image':"select image"}</span>}
                </label>
                <input id='selectImage' className='selectImage' type='file' hidden onChange={handleImageUpload}/>
                <br/>
                {editor}
                <br/>
                <div className='d-flex align-items-center justify-content-center'>
                <MDBBtn onClick={()=>{
                    submit()
                }} rounded color='dark' style={{width:"100%"}}>{isLoading ? <ClipLoader size={16} color='white'/>:"Submit"}</MDBBtn>
                </div>

            </div>

        </>
    )
}

export default CreateBlog;