const users = {
    '599966846': { name: 'Ahmed Adham', birthDate: '8-12-2003', position: 'President',extraInfo:'A', expiryDate: '2025-02-15', profilePic: 'me.jpg', qrCode: '308.png', shape1: 'circle', shape2: 'triangle' },
    '107700147': { name: 'Mohamed Gamal', birthDate: '17-8-2002', position: 'Minster',extraInfo:'A',  expiryDate: '2025-02-11', profilePic: 'gamal.jpeg', qrCode: 'jimmy.png', shape1: 'triangle', shape2: 'circle' },
    '623761959': { name: 'Zyad Elsawy', birthDate: '6-7-2003', position: 'NULL',extraInfo:'B', expiryDate: '2025-01-15', profilePic: 'zz.jpeg', qrCode: 'images/qr789.png', shape1: 'circle', shape2: 'circle' },
    '673812945': { name: 'Mahmoud Rajab', birthDate: '20-11-2004', position: 'Minster',extraInfo:'A',  expiryDate: '2025-01-11', profilePic: 'hh.jpeg', qrCode: 'raj.png', shape1: 'triangle', shape2: 'triangle' },
    '198765432': { name: 'Omar Mekki', birthDate: '22-2-2005', position: 'NULL', extraInfo: 'B', expiryDate: '2025-01-15', profilePic: 'mekkkk.jpeg', qrCode: '246.png', shape1: 'circle', shape2: 'triangle' },
    '131': { name: 'Dana Lee', birthDate: '1999-06-18', position: 'Intern', extraInfo: 'Studies marine conservation.', expiryDate: '2026-06-18', profilePic: 'images/dana.jpg', qrCode: 'images/qr131.png', shape1: 'triangle', shape2: 'circle' }
};

document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const uniqueID = document.getElementById('uniqueID').value;
    const user = users[uniqueID];
    if (user) {
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('profile').classList.remove('hidden');
        document.getElementById('name').value = user.name;
        document.getElementById('birthDate').value = user.birthDate;
        document.getElementById('position').value = user.position;
        document.getElementById('extraInfo').value = user.extraInfo;
        document.getElementById('expiryDate').value = user.expiryDate;
        document.getElementById('profilePic').src = user.profilePic;
        document.getElementById('qrCode').src = user.qrCode;
        
        const shape1 = document.getElementById('shape1');
        const shape2 = document.getElementById('shape2');
        shape1.className = user.shape1;
        shape2.className = user.shape2;
    } else {
        alert('User not found');
    }
});
