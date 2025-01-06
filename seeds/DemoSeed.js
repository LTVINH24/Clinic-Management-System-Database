/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('Bill').del();
  await knex('PrescriptionDetail').del();
  await knex('Prescription').del();
  await knex('MedicalRecord').del();
  await knex('MedicalExaminationForm').del();
  await knex('Doctor').del();
  await knex('Patient').del();
  await knex('Medicine').del();
  await knex('Specialty').del();
  await knex('EndUser').del();

  const users = await knex('EndUser').insert([
    {
      name: 'Nguyễn Văn Toàn',
      role: 'admin',
      username: 'admin',
      password: '$2a$11$b7pJOs6WuMGldTBkFdX6E.f0z.PACOYfQdNpt99yk/abbRaN.4xnG',
      phone: '0987654321',
      birthday: '1990-10-10',
      address: 'Thủ Đức, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Nguyễn Thị Thanh',
      role: 'staff',
      username: 'staff5',
      password: '$2a$11$wkg.taffxC/kIiggLSUgZezk90smQy4RnU6/pDdE.7IfJ2inNg6FW',
      phone: '0912345678',
      birthday: '1992-01-01',
      address: 'Bình Thạnh, tp.HCM',
      gender: 'Female'
    },
    {
      name: 'Nguyễn Thị Thảo',
      role: 'doctor',
      username: 'doctor',
      password: '$2a$11$lj5hCZ3gPFQ4xhC8F5a8keT7rieJl3soBuLFlqRoV0.Ev6viXJsua',
      phone: '0923456789',
      birthday: '1989-03-15',
      address: 'Quận 5, tp.HCM',
      gender: 'Female'
    },
    {
      name: 'Nguyễn Anh Khoa',
      role: 'doctor',
      username: 'doctor1',
      password: '$2a$11$h71dkvDFwKjp1kmjYDm4WuszMyoP.lmlAiRTlCMq7emEo9rLTg7UK',
      phone: '0934567890',
      birthday: '1987-05-08',
      address: 'Quận 8, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Lê Huy Hải',
      role: 'doctor',
      username: 'doctor2',
      password: '$2a$11$tHXsWeHg6HALkEj5TyRc5.TZdUuR0WlXsiauZz7BKfUjP5Ot65mxS',
      phone: '0945678901',
      birthday: '1988-09-08',
      address: 'Củ Chi, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Nguyễn Xuân Son',
      role: 'doctor',
      username: 'doctor3',
      password: '$2a$11$kFDJkJpmt2/zw44Z0LT4mOS9euGNkhxUj/3qT6uD7pcgq2XW43eNq',
      phone: '0956789012',
      birthday: '1986-07-18',
      address: 'Thủ Đức, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Nguyễn Thị Minh Thư',
      role: 'doctor',
      username: 'doctor4',
      password: '$2a$11$pjRW29iBtbaB1yXt4VeVaeougdfoyZqNoLtGxYdoeldihIktpjia6',
      phone: '0967890123',
      birthday: '1991-04-12',
      address: 'Bình Chánh, tp.HCM',
      gender: 'Female'
    },
    {
      name: 'Trần Anh Tú',
      role: 'doctor',
      username: 'doctor5',
      password: '$2a$11$EWFmKx9zNb1ky/61dl.Pt.LY1P3cl1z9qUwWHi0hd9D88XlNiwKnO',
      phone: '0978901234',
      birthday: '1986-12-12',
      address: 'Thủ Đức, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Trần Hoàng Kim Ngân',
      role: 'doctor',
      username: 'doctor6',
      password: '$2a$11$EzXuZkfrhZ7Rt6f0rxVdJOyR5FAuSpPVG6cNQfLQY/HfwTWWWX2wq',
      phone: '0989012345',
      birthday: '1993-10-12',
      address: 'Tân An, Long An',
      gender: 'Female'
    },
    {
      name: 'Nguyễn Đình Triệu',
      role: 'staff',
      username: 'staff1',
      password: '$2a$11$fC28OZsUvObtByO9UC.xGuqdeP8Y2W8XXjNrmcL6PKFy7bBR/Mpt6',
      phone: '0990123456',
      birthday: '1994-08-22',
      address: 'Gò Vấp, tp.HCM',
      gender: 'Male'
    },
    {
      name: 'Đặng Văn Lâm',
      role: 'staff',
      username: 'staff2',
      password: '$2a$11$o0tl4tGWzkofEpj.H4KtIOIiBdN2xHmT9kfk7GlzhJxhy6bKfTas6',
      phone: '0901234567',
      birthday: '1992-07-13',
      address: 'Bình Thạnh, tp.HCM',
      gender: 'Male'
    },
  ]).returning('id'); 

  const userIdAdmin = users[0].id;
  const userIdStaff = users[1].id;
  const userIdDoctor = users[2].id;
  const userIdDoctor1 = users[3].id;
  const userIdDoctor2 = users[4].id;
  const userIdDoctor3 = users[5].id;
  const userIdDoctor4 = users[6].id;
  const userIdDoctor5 = users[7].id;
  const userIdDoctor6 = users[8].id;
  const userIdStaff1 = users[9].id;
  const userIdStaff2 = users[10].id;


  const specialties = await knex('Specialty').insert([
    { name: "Khoa 1" },
    { name: "Khoa 2" },
    { name: "Khoa 3" },
    { name: "Khoa 4" }
  ]).returning('id'); 

  const specialtyId = specialties[0].id
  const specialtyId1 = specialties[1].id;
  const specialtyId2 = specialties[2].id;
  const specialtyId3 = specialties[3].id;
  

  
  const medicine = await knex('Medicine').insert([
    { 
      name: "Paracetamol", 
      manufacturer: "Dược Hậu Giang", 
      price: 15000, 
      quantity: 1000, 
      quantityImport: 1000,
      MfgDate: "2024-01-01", 
      ExpDate: "2025-12-31",
      DateImport: "2024-01-10",
      isDeleted: 'false'
    },
    { 
      name: "Amoxicillin", 
      manufacturer: "Imexpharm", 
      price: 45000, 
      quantity: 500, 
      quantityImport: 500,
      MfgDate: "2024-01-15", 
      ExpDate: "2025-06-30",
      DateImport: "2024-01-20",
      isDeleted: 'false'
    },
    { 
      name: "Omeprazole", 
      manufacturer: "Pharmedic", 
      price: 35000, 
      quantity: 800, 
      quantityImport: 800,
      MfgDate: "2024-02-01", 
      ExpDate: "2025-09-30",
      DateImport: "2024-02-10",
      isDeleted: 'false'
    },
    { 
      name: "Mefenamic acid", 
      manufacturer: "Dược phẩm TW3", 
      price: 25000, 
      quantity: 600, 
      quantityImport: 600,
      MfgDate: "2024-02-15", 
      ExpDate: "2025-08-31",
      DateImport: "2024-02-20",
      isDeleted: 'false'
    },
    { 
      name: "Cetirizine", 
      manufacturer: "Dược Sài Gòn", 
      price: 30000, 
      quantity: 700, 
      quantityImport: 700,
      MfgDate: "2024-01-20", 
      ExpDate: "2025-07-31",
      DateImport: "2024-01-25",
      isDeleted: 'false'
    },
    { 
      name: "Vitamin B Complex", 
      manufacturer: "OPC", 
      price: 40000, 
      quantity: 400, 
      quantityImport: 400,
      MfgDate: "2024-03-01", 
      ExpDate: "2025-10-31",
      DateImport: "2024-03-05",
      isDeleted: 'false'
    }
  ]).returning('id');
  
  const doctors = await knex('Doctor').insert([
    {
      userId: userIdDoctor, 
      specialtyId: specialtyId, 
      room: 'P101',
    },
    {
      userId: userIdDoctor1, 
      specialtyId: specialtyId1, 
      room: 'P102',
    },
    {
      userId: userIdDoctor2, 
      specialtyId: specialtyId1, 
      room: 'P103',
    },
    {
      userId: userIdDoctor3, 
      specialtyId: specialtyId2, 
      room: 'P104',
    },
    {
      userId: userIdDoctor4, 
      specialtyId: specialtyId3, 
      room: 'P105',
    },
    {
      userId: userIdDoctor5, 
      specialtyId: specialtyId3, 
      room: 'P106',
    },
    {
      userId: userIdDoctor6, 
      specialtyId: specialtyId3, 
      room: 'P107',
    },
  ])
  
  const patients = await knex('Patient').insert([
    {
      name: "Nguyễn Văn Hùng",
      residentId: "098765432100",
      email: "hungnguyen@gmail.com",
      birthday: "2000-10-10",
      address: "Thủ Đức, tp.HCM",
      gender: "Male",
    },
    {
      name: "Nguyễn Văn Mạnh",
      residentId: "098765432101", 
      email: "vanmanh@gmail.com",
      birthday: "2004-10-10",
      address: "Quận 9, tp.HCM",
      gender: "Male",
    },
    {
      name: "Nguyễn Thị Thảo",
      residentId: "098765432102",
      email: "thao@gmail.com", 
      birthday: "2000-12-10",
      address: "Bình Thạnh, tp.HCM",
      gender: "Female",
    },
    {
      name: "Trần Thị Hoa",
      residentId: "098765432103",
      email: "hoatran@gmail.com",
      birthday: "1995-05-15",
      address: "Quận 1, tp.HCM",
      gender: "Female",
    },
    {
      name: "Lê Minh Đức",
      residentId: "098765432104",
      email: "ducle@gmail.com",
      birthday: "1988-08-20",
      address: "Quận 7, tp.HCM",
      gender: "Male",
    },
    {
      name: "Phạm Thanh Hà",
      residentId: "098765432105",
      email: "hapham@gmail.com",
      birthday: "1992-03-25",
      address: "Tân Bình, tp.HCM",
      gender: "Female",
    },
    {
      name: "Hoàng Văn Nam",
      residentId: "098765432106",
      email: "namhoang@gmail.com",
      birthday: "1998-12-05",
      address: "Gò Vấp, tp.HCM",
      gender: "Male",
    },
  ]).returning('id');
  
  const patientId = patients[0].id;
  const patientId1 = patients[1].id;
  const patientId2 = patients[2].id;
  const patientId3 = patients[3].id;
  const patientId4 = patients[4].id;
  const patientId5 = patients[5].id;
  const patientId6 = patients[6].id;
  
  const examinationForms = await knex('MedicalExaminationForm').insert([
    {
      patientId: patientId,
      staffId: userIdStaff,
      doctorId: userIdDoctor,
      time: "2025-01-01 10:00:00",
      symptom: "Đau bụng",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId5,
      staffId: userIdStaff2,
      doctorId: userIdDoctor5,
      time: "2025-01-03 15:00:00",
      symptom: "Đau khớp gối, khó đi lại",
      visitType: "New",
      isExaminated: 'true',
    },
    {
      patientId: patientId6,
      staffId: userIdStaff,
      doctorId: userIdDoctor6,
      time: "2025-01-04 08:30:00",
      symptom: "Chóng mặt, buồn nôn",
      visitType: "New",
      isExaminated: 'true',
    },
    {
      patientId: patientId,
      staffId: userIdStaff1,
      doctorId: userIdDoctor,
      time: "2025-01-04 13:45:00",
      symptom: "Đau dạ dày tái phát",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId1,
      staffId: userIdStaff2,
      doctorId: userIdDoctor1,
      time: "2025-01-05 09:15:00",
      symptom: "Sốt nhẹ, mệt mỏi",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId2,
      staffId: userIdStaff,
      doctorId: userIdDoctor2,
      time: "2025-01-05 10:30:00",
      symptom: "Đau răng khôn",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId3,
      staffId: userIdStaff1,
      doctorId: userIdDoctor3,
      time: "2025-01-05 14:00:00",
      symptom: "Dị ứng da, ngứa",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId4,
      staffId: userIdStaff2,
      doctorId: userIdDoctor4,
      time: "2025-01-06 08:00:00",
      symptom: "Viêm xoang cấp",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId5,
      staffId: userIdStaff,
      doctorId: userIdDoctor5,
      time: "2025-01-06 10:45:00",
      symptom: "Đau lưng mãn tính",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId6,
      staffId: userIdStaff1,
      doctorId: userIdDoctor6,
      time: "2025-01-06 15:30:00",
      symptom: "Rối loạn tiêu hóa",
      visitType: "New",
      isExaminated: 'true',
    },
    {
      patientId: patientId,
      staffId: userIdStaff2,
      doctorId: userIdDoctor,
      time: "2025-01-07 09:00:00",
      symptom: "Đau đầu migraine",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId1,
      staffId: userIdStaff,
      doctorId: userIdDoctor1,
      time: "2025-01-07 13:15:00",
      symptom: "Viêm họng cấp",
      visitType: "New",
      isExaminated: 'false',
    },
    {
      patientId: patientId2,
      staffId: userIdStaff1,
      doctorId: userIdDoctor2,
      time: "2025-01-07 16:00:00",
      symptom: "Đau khớp vai",
      visitType: "New",
      isExaminated: 'false',
    }
  ]).returning('id');
  
  const medicalRecords = await knex('MedicalRecord').insert([
    {
      doctorId: userIdDoctor5,
      patientId: patientId5,
      medicalExaminationFormId: examinationForms[1].id,
      time: "2025-01-03 15:00:00",
      diagnosis: "Viêm khớp gối, thoái hóa khớp",
    },
    {
      doctorId: userIdDoctor6,
      patientId: patientId6,
      medicalExaminationFormId: examinationForms[2].id,
      time: "2025-01-04 08:30:00",
      diagnosis: "Rối loạn tiền đình",
    },
    {
      doctorId: userIdDoctor6,
      patientId: patientId6,
      medicalExaminationFormId: examinationForms[9].id,
      time: "2025-01-06 15:30:00",
      diagnosis: "Viêm dạ dày",
    }
  ]).returning('id');
  
  const prescriptions = await knex('Prescription').insert([
    {
      time: "2025-01-03 15:00:00",
      medicalExaminationFormId: examinationForms[1].id,
      nextExaminationDate: "2025-01-17 15:00:00",
      isBilled: 'true',
    },
    {
      time: "2025-01-04 08:30:00",
      medicalExaminationFormId: examinationForms[2].id,
      nextExaminationDate: "2025-01-18 08:30:00",
      isBilled: 'true',
    },
    {
      time: "2025-01-06 15:30:00",
      medicalExaminationFormId: examinationForms[9].id,
      nextExaminationDate: "2025-01-20 15:30:00",
      isBilled: 'true',
    }
  ]).returning('id');
  
  const prescriptionDetails = await knex('PrescriptionDetail').insert([
    {
      prescriptionId: prescriptions[0].id,
      medicineId: medicine[0].id,
      quantity: 2,
      dosage: "Uống 3 lần/ngày, mỗi lần 1 viên sau ăn",
    },
    {
      prescriptionId: prescriptions[0].id,
      medicineId: medicine[3].id,
      quantity: 1,
      dosage: "Uống 2 lần/ngày, mỗi lần 1 viên sau ăn",
    },
    {
      prescriptionId: prescriptions[1].id,
      medicineId: medicine[4].id,
      quantity: 1,
      dosage: "Uống 1 viên/ngày trước khi đi ngủ",
    },
    {
      prescriptionId: prescriptions[1].id,
      medicineId: medicine[5].id,
      quantity: 1,
      dosage: "Uống 1 viên/ngày sau ăn sáng",
    },
    {
      prescriptionId: prescriptions[2].id,
      medicineId: medicine[2].id,
      quantity: 1,
      dosage: "Uống 1 viên/ngày trước bữa sáng",
    },
    {
      prescriptionId: prescriptions[2].id,
      medicineId: medicine[1].id,
      quantity: 1,
      dosage: "Uống 2 lần/ngày, mỗi lần 1 viên sau ăn",
    }
  ]).returning('id');
  
  const bills = await knex('Bill').insert([
    {
      prescriptionId: prescriptions[0].id,
      totalAmount: 55000,
      createDate: "2025-01-03 15:00:00",
      isGetMedicine: 'true',
    },
    {
      prescriptionId: prescriptions[1].id,
      totalAmount: 70000,
      createDate: "2025-01-04 08:30:00",
      isGetMedicine: 'true',
    },
    {
      prescriptionId: prescriptions[2].id,
      totalAmount: 80000,
      createDate: "2025-01-06 15:30:00",
      isGetMedicine: 'true',
    }
  ]);
};

