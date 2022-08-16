import MemberCard from "./MemberCard"

export default function LandingPage( {allMembers} ) {



    const mapAllMembers = allMembers.map(member => {
        return(
            <MemberCard key={member.id} member={member}/>
        )
    })



    return (
        <div>
            {mapAllMembers}
        </div>
    )
}