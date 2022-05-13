// Creare Array con dentro ogni membro e informazione.
const teamMembers = [

    {
        memberPicture: "",
        memberName: "Wayne Barnett",
        memberRole: "Founder & CEO"
    }, 

];

const teamContainer = document.querySelector(".team-container");

for(let i = 0; i < teamMembers.length; i ++){

    const teamCard = ` 
    <div class="team-card">
        <div class="card-image">
        <img src="img/wayne-barnett-founder-ceo.jpg"
            alt="Wayne Barnett"
        />
        </div>
        <div class="card-text">
        <h3>Wayne Barnett</h3>
        <p>Founder & CEO</p>
        </div>
    </div>`

    teamContainer.innerHTML += teamCard
}