const getDonationToLocalStorage=()=>{
    const storeJobApplication=localStorage.getItem('job-applications')
    if(storeJobApplication){
        return JSON.parse(storeJobApplication)
    }
    return []
}
const saveJobApplication=id=>{
    const storeJobApplications=getDonationToLocalStorage()
    const exists=storeJobApplications.find(jobId=>jobId==id)
    if(!exists){
        storeJobApplications.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storeJobApplications))
    }
    else{
        alert("Already Added")
    }
}
export {saveJobApplication,getDonationToLocalStorage}