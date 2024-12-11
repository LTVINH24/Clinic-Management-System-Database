/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('Doctor').del();
  await knex('Specialty').del();
  await knex('EndUser').del();
  await knex('Medicine').del();

  const [admin, staff, doctor] = await knex('EndUser').insert([
    {
      name: 'Admin',
      role: 'admin',
      username: 'admin',
      password: '$2a$11$b7pJOs6WuMGldTBkFdX6E.f0z.PACOYfQdNpt99yk/abbRaN.4xnG',
      phone: '0987654321 ',
      birthday: '2000-10-10',
      address: 'HCM',
      gender: 'Male'
    },
    {
      name: 'staff',
      role: 'staff',
      username: 'staff5',
      password: '$2a$11$wkg.taffxC/kIiggLSUgZezk90smQy4RnU6/pDdE.7IfJ2inNg6FW',
      phone: '0808080808',
      birthday: '2000-01-01',
      address: 'HCM',
      gender: 'Male'
    },
    {
      name: 'doctor',
      role: 'doctor',
      username: 'doctor',
      password: '$2a$11$lj5hCZ3gPFQ4xhC8F5a8keT7rieJl3soBuLFlqRoV0.Ev6viXJsua',
      phone: '0707070707',
      birthday: '1999-01-01',
      address: 'HCM',
      gender: 'Female'
    }
  ]).returning('id'); 

  const userIdAdmin = admin.id;
  const userIdStaff = staff.id;
  const userIdDoctor = doctor.id;


  const [specialty] = await knex('Specialty').insert([
    { name: "Khoa 1" },
    { name: "Khoa 2" },
    { name: "Khoa 3" },
    { name: "Khoa 4" }
  ]).returning('id'); 

  const specialtyId = specialty.id;

  
  const medicine = await knex('Medicine').insert([
    { name: "Paracetamol", manufacturer: "Long Châu", price: 10000, quantity: 100, ExpDate: "2024-05-05", MfgDate: "2025-05-05" },
    { name: "Panadol", manufacturer: "FPT", price: 12000, quantity: 100, ExpDate: "2024-07-05", MfgDate: "2025-07-05" },
    { name: "Alexan", manufacturer: "Dược Hậu Giang", price: 9000, quantity: 100, ExpDate: "2024-10-05", MfgDate: "2025-10-05" },
    { name: "Azental", manufacturer: "Dược Long An", price: 14000, quantity: 100, ExpDate: "2024-12-08", MfgDate: "2025-12-08" },
    { name: "Furgacar", manufacturer: "Dược Cần Thơ", price: 17000, quantity: 100, ExpDate: "2024-10-10", MfgDate: "2025-10-10" },
    { name: "Azotel", manufacturer: "Dược Bạc Liêu", price: 15000, quantity: 100, ExpDate: "2024-06-10", MfgDate: "2025-06-10" },
    
  ]);
  
  
  await knex('Doctor').insert([
    {
      userId: userIdDoctor, 
      specialtyId: specialtyId, 
      room: 'P101',
    },
  ]);
};
