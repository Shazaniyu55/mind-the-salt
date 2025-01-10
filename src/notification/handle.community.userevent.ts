import { NotificationInterface } from "@/Components/dashboard/features.interface";
import sendNotification from "./sendNotification";
import { Profile } from "@/Components/pub/interface";
import { getCurrentTimestamp } from "@/Logics/DateFunc";

async function handleCommunityUserEvent(editorHeading: string, data: any,user:Profile,postId:string) {
    let notificationObj: NotificationInterface | null=null;

   if (editorHeading?.includes("Reply to")) {
        // Create notification for replying to a post
        notificationObj = {
            heading: "New Reply to Your Post",
            sentAt:getCurrentTimestamp(),
            body: `${user.name} has replied to your post! 💬`,
            logo: "/images/notification.png",
            userId: user.sid,
            read: false,
            link:`/community-go-to-expand?id=${postId}`,
            readAt: ""
        };
    } else if (editorHeading?.includes('Replying to')) {
     
        // Create notification for replying to a specific reply
        notificationObj = {
            heading: "New Reply to Your Comment",
            sentAt:getCurrentTimestamp(),
            body: `${user.name} has replied to your comment! 🔄`,
            logo: "/images/notification.png",
            userId:user.sid,
            read: false,
            link:`/community-go-to-expand?id=${postId}`,
            readAt: ""
        };
    }

    // Send the notification
    if (notificationObj) {
        await sendNotification(data.profile.sid, notificationObj);
    }
}


export default handleCommunityUserEvent