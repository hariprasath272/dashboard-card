import React from 'react'
import "./Sidebar.css"



const Sidebar = () => {
    return (
        <div>
            <div className='sidebar-container'>
                <div className='flex flex-col justify-between h-screen'>
                    <div>
                        <div className='flex flex-col items-center gap-4 mt-16'>
                        <i class="bi bi-patch-plus-fill"  style={{color:"white",fontSize:"1.5rem"}} ></i>
                        <i class="bi bi-folder-fill" style={{color:"white",fontSize:"1.5rem"}}></i>
                        </div>
                    </div>
                    <div  className='flex flex-col items-center gap-4'>
                    <i class="bi bi-bell-fill" style={{color:"white",fontSize:"1.5rem"}}></i>
                    <i class="bi bi-patch-question-fill" style={{color:"white",fontSize:"1.5rem"}}></i>
                    <i class="bi bi-chat-left-text-fill" style={{color:"white",fontSize:"1.5rem"}}></i>
                    <i class="bi bi-person-fill" style={{color:"white",fontSize:"1.5rem"}}></i>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Sidebar