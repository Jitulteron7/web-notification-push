const publicKey="BCCRzXvR-g-Z4y6iPke5LQhUPbTq4PFpdBffkhTlFIY_jDR0aw08UVAipdR1-_YVTn_VWi7tRIvTu6m3DXEgrMo";
// CHECK FOR SERVICE WORKER (CEHCK SERVICE WORKER IN MDN)
if("serviceWorker" in navigator){
    // navigator is an api of borwser
    send().catch(err=>console.error(err));
}
async function send(){
console.log("registering SW..");
const register=await navigator.serviceWorker.register("/worker.js",{
//    can apply diffrent url also
    scope:"/"
});
console.log("SW registered..");
// register push
console.log(" R push");
const subscription=await register.pushManager.subscribe({
userVisibleOnly:true,
// from doc
applicationServerKey:urlBase64ToUint8Array(publicKey)
});
console.log("P R..");
console.log("seding P..");
// onlclick the notification will push
 document.querySelector(".yo").addEventListener("click",async (e)=>{
  document.querySelector(".yo").innerHTML="notification send" 
  await fetch("/subscribe",{
    method:"POST",
    body:JSON.stringify(subscription),
    headers:{
        "content-type":"application/json"
    }
});     
})

console.log("Push Sent...");
}
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  