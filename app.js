const data = [
  {
    name: 'Bozo Beak',
    age: 10,
    gender: 'male',
    lookingFor: 'female',
    location: 'Bozo Land',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Bozo Beak1',
    age: 25,
    gender: 'male',
    lookingFor: 'female',
    location: 'Bozo Land1',
    image: 'https://randomuser.me/api/portraits/men/80.jpg'
  },
  {
    name: 'Bozo Beak2',
    age: 20,
    gender: 'male',
    lookingFor: 'female',
    location: 'Bozo Land2',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul class='list-group'>
    <li class='list-group-item'>Name: ${currentProfile.name}</li>
    <li class='list-group-item'>Age: ${currentProfile.age}</li>
    <li class='list-group-item'>Location: ${currentProfile.location}</li>
    <li class='list-group-item'>Preference: ${
      currentProfile.gender
    } looking for ${currentProfile.lookingFor}</li>
  </ul> 
  `;
    document.getElementById('imageDisplay').innerHTML = `<img src='${
      currentProfile.image
    }' >`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
