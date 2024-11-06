/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('Doctor').del();
  await knex('Specialty').del();
  await knex('EndUser').del();

  const [admin, staff, doctor] = await knex('EndUser').insert([
    {
      name: 'admin',
      role: 'admin',
      username: 'admin',
      password: 'AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAqfvU7w59lEKDIIjma38xOwAAAAACAAAAAAAQZgAAAAEAACAAAABGU2rkbMqb6Mshh72/cymk8e/X+bK0+k0a3RGTWsYAfQAAAAAOgAAAAAIAACAAAABUCb5xqheZ9UC57bfOsKXtCxYaD9MUtL20NLmViKR9lRAAAABNyyK8XuuaDSYNni4GDoEgQAAAAAELXJrtvOUTEx2Q8y0IAxdI9gMYdx9rLjeQjnbiPZ49/ZRSh0a7BT7PFF1SOQwkhFOA8Vo4lnm3iEgQDVfAUZs=',
      phone: '0909090909',
      birthday: '2000-10-27',
      address: 'HCM',
      gender: 'Male',
      entropy: 'iwN01SQcP7r4xSKKvf1G2NYvYSI='
    },
    {
      name: 'staff',
      role: 'staff',
      username: 'staff',
      password: 'AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAqfvU7w59lEKDIIjma38xOwAAAAACAAAAAAAQZgAAAAEAACAAAAAItJb2sqifgO3qhQUqKxzHmKK5VpiQxcQoFvwTkb/GyQAAAAAOgAAAAAIAACAAAAAZoEpNwH1BfAQZwUGb416lbECC7r8FYMDptIIbID/jdhAAAACE/JWG8qdiK1gqJeCSV+umQAAAAGrBxMXRErRPSKjrXyASwIA8cdSpkfxZnlrVoyzbGJgUfWA97egTTgR21vB0VCIoCB9EnmszbDTRoIh9ZNgMIeg=',
      phone: '0808080808',
      birthday: '2000-01-01',
      address: 'HCM',
      gender: 'Male',
      entropy: 'h9+ep4dvQ1jxwIM+rGtfB+oM2xY='
    },
    {
      name: 'doctor',
      role: 'doctor',
      username: 'doctor',
      password: 'AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAqfvU7w59lEKDIIjma38xOwAAAAACAAAAAAAQZgAAAAEAACAAAADj9veshIqbs/u0/sE9GETnMGEhEvZArov8LQP1VNkY0AAAAAAOgAAAAAIAACAAAABMKiujttbB9LPzPWbBV6QiqlWtO/nGTuzDAFgFZaTbhRAAAACfMwc7amqgg+jI5CdKgwRIQAAAAFWWW7dYKrEBd1D7meLej1bh/awnj5ey1A/WtNgAu3pZrYOd+TDEGsc1x5qEK6am4iZPTsRqeeB5QLYpbr+DpT0=',
      phone: '0707070707',
      birthday: '1999-01-01',
      address: 'HCM',
      gender: 'Female',
      entropy: 'GW7EdtHGjqjEz2ETlVyCKWXA3RY='
    }
  ]).returning('id'); 

  const userIdAdmin = admin.id;
  const userIdStaff = staff.id;
  const userIdDoctor = doctor.id;


  const [specialty] = await knex('Specialty').insert([
    { name: "Khoa 1" },
  ]).returning('id'); 


  const specialtyId = specialty.id;


  await knex('Doctor').insert([
    {
      userId: userIdDoctor, 
      specialtyId: specialtyId, 
      room: 'P1',
    },
  ]);
};
