
export default function MemberCard( {member} ) {
    return(
        <div>
            <p>{member.first_name} {member.last_name}</p>
            <p>Phone :{member.phone_number}</p>
            <p>email : {member.email_address}</p>
            <p>Member # : {member.membership_number}</p>
        </div>
    )
}