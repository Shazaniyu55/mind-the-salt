import Bold from '@/utils/Bold'
import { Divider } from '@mui/material'
import React from 'react'
import ScrollBar from 'react-perfect-scrollbar'

const AdminIntroductions: React.FC = () => {
    return (
        <>
            <div className='myContainer'>
                <Bold style={{ color: "var(--red-d-1)" }}>Admin</Bold>
                <Divider />
                <ScrollBar style={{ maxHeight: "80vh" }}>
                    <div style={{marginTop: "20px" }}>
                        <p>
                            <strong>Note:</strong> Only people with admin permission can view this page. All changes made are reflected immediately.
                        </p>
                    </div>
                </ScrollBar>
            </div>
        </>
    )
}

export default AdminIntroductions;
