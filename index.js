const name = ["Alice", "Bob", "Carol"];
const occupation = ["Writer", "Teacher", "Programmer"];
const initialFreelancers = [
    {name: "Alice", occupation: "Writer", startingPrice: 30},
    {name: "Bob", occupation:  "Teacher", startingPrice: 50}
];

function renderFreelancers(){
    const freelancerList = document.getElementById('freelancer-list');
    freelancerList.innerHTML = '';

    initialFreelancers.forEach(freelancer => {
        const item = document.createElement('div');
        item.innerHTML = '${freelancer.name'}, ${freelancer.occupation}, Starting Price: $${freelancer.price}';
        freelancerList.appendChild(item);
    });
}

function randomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const newFreelancer = {name: randomName, occupation: randomOccupation};
    const initialFreelancers.push(newFreelancer);
    renderFreelancers();
}

setInterval(randomFreelancer, 3000);




