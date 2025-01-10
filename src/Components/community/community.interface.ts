import { Profile } from "../pub/interface";

export interface Post{
    heading:string,
    docId?:string,
    postId?:string,
    commentId?:string,
    type?: "post" | "comment" | "reply",
    replyId?:string,
    uid:string,
    htmlBody:string,
    textBody:string,
    voteScore:string[],//list of poeple uid
    comments:string[],
    createdAt:string,
    editedAt:string,
    updatedAt:string,
    profile:any | Profile,
    views?:string | number
}