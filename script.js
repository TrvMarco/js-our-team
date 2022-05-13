// Creare Array con dentro ogni membro e informazione.
const teamMembers = [

    {
        memberPicture: "img/wayne-barnett-founder-ceo.jpg",
        memberName: "Wayne Barnett",
        memberRole: "Founder & CEO"
    }, 
    {
        memberPicture: "img/angela-caroll-chief-editor.jpg",
        memberName: "Angela Caroll",
        memberRole: "Chief Editor"
    },
    {
        memberPicture: "img/walter-gordon-office-manager.jpg",
        memberName: "Walter Gordon",
        memberRole: "Office Manager"
    },
    {
        memberPicture: "img/angela-lopez-social-media-manager.jpg",
        memberName: "Angela Lopez",
        memberRole: "Social Media Manager"
    },
    {
        memberPicture: "img/scott-estrada-developer.jpg",
        memberName: "Scott Estrada",
        memberRole: "Developer"
    },
    {
        memberPicture: "img/barbara-ramos-graphic-designer.jpg",
        memberName: "Barbara Ramos",
        memberRole: "Graphic Designer"
    },
];

const teamContainer = document.querySelector(".team-container");

for(let i = 0; i < teamMembers.length; i ++){

    const teamCard = ` 
    <div class="team-card">
        <div class="card-image">
            <img src="${teamMembers[i].memberPicture}"
                alt="${teamMembers[i].memberName}"
            />
        </div>
        <div class="card-text">
        <h3>${teamMembers[i].memberName}</h3>
        <p>${teamMembers[i].memberRole}</p>   
    </div>`

    teamContainer.innerHTML += teamCard
}