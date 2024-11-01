exports.up = async function(knex) {
    await knex.raw(`
        CREATE TABLE EndUser(  
            id int IDENTITY(1,1) primary key,
            name nvarchar(200),
            role nvarchar(20),
            username nchar(100),
            password ntext,
            phone nchar(11),
            birthday date,
            address ntext
        );
         CREATE TABLE Specialty(  
            id int IDENTITY(1,1) primary key,
            name nvarchar(200)
        );
        CREATE TABLE Doctor(  
            userId int,
            specialtyId int
            primary key (userId,specialtyId)
        );

         CREATE TABLE Patient(  
            id int IDENTITY(1,1) primary key,
            email ntext,
            name nvarchar(200),
            address ntext,
            birthday date
        );
         CREATE TABLE MedicalExaminationForm(  
            id int IDENTITY(1,1) primary key,
            patientId int,
            staffId int,
            time date,
            symptom ntext
        );
         CREATE TABLE MedicalRecord(  
           id int IDENTITY(1,1) primary key,
           doctorId int,
           MedicalExaminationFormID int,
           time date,
           diagnosis ntext
        );
        CREATE TABLE Prescription(  
            id int IDENTITY(1,1) primary key,
            medicalRecordId int,
           time date,
           medicineId int,
           quantity int,
           dosage ntext
        );
        CREATE TABLE Medicine(  
            id int IDENTITY(1,1) primary key,
            name nvarchar(200),
            manufacturer nvarchar(200),
            price int 
        );
        CREATE TABLE Bill(  
            id int IDENTITY(1,1) primary key,
            prescriptionId int,
            totalAmount int
        );
    `);
};

exports.down = async function(knex) {
    await knex.raw(`
        DROP TABLE EndUser;
        DROP TABLE Specialty;
        DROP TABLE Doctor;
        DROP TABLE Patient;
        DROP TABLE MedicalExaminationForm;
        DROP TABLE MedicalRecord;
        DROP TABLE Prescription;
        DROP TABLE Medicine;
        DROP TABLE Bill;
    `);
};