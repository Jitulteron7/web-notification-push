
console.log("SW loading ..");
//self tells the actual worker we are in 
//here this as well as self works fine
this.addEventListener("push",e=>{
    const data=e.data.json();
    console.log("push recievied...");
    this.registration.showNotification(data.title,{
        body:"This is to show how to use serviceworker and webpush to push notification",
        icon:"http://res.cloudinary.com/jitul-teron/image/upload/v1597132487/xos36ooe6n9ydwypbkng.png"
    });
})