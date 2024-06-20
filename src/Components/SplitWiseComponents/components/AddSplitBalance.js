import React from 'react'

export default function AddSplitBalance({
    updateAmountForGroup,
    setCurrentAmount,
}) {
    return (
        <div>
            <div>
                <input type="number" onChange={(e) => {
                    setCurrentAmount(e.target.value)
                }} />
                <div style={{ border: "1px solid green", borderRadius: "8px", padding: "10px 16px", width: "fit-content" }}
                    onClick={() => {
                        updateAmountForGroup()
                    }}>Add Bill</div>
            </div>
            {/* <div>Members in the group</div>
            <ul>{groupStore["grp_1"]?.group_data?.map((member) => {
                return <li style={{ margin: "10px 20px" }}>
                    <div style={{ border: "1px solid cyan", borderRadius: "8px", padding: "2px 6px", width: "fit-content" }}>
                        {member?.userName} - Current Balance = {member?.currentBalance}
                    </div>
                </li>
            })}
            </ul> */}
        </div>
    )
}
