exports.up = async function(knex) {
    await knex.raw(`
        ALTER TABLE Prescription DROP CONSTRAINT FK_Prescription_Medicine;
        ALTER TABLE Prescription DROP COLUMN medicineId;
        ALTER TABLE Prescription DROP COLUMN quantity;
        ALTER TABLE Prescription DROP COLUMN dosage;
        ALTER TABLE Medicine ADD DateImport DATE;
        ALTER TABLE Medicine ADD QuantityImport INT;
        CREATE TABLE PrescriptionDetail(  
            id INT IDENTITY(1,1) PRIMARY KEY,
            PrescriptionId INT,
            medicineId INT,
            quantity INT,
            dosage INT
        );

        ALTER TABLE PrescriptionDetail ADD CONSTRAINT FK_PrescriptionDetail_Prescription FOREIGN KEY(PrescriptionId) REFERENCES Prescription(id);
        ALTER TABLE PrescriptionDetail ADD CONSTRAINT FK_PrescriptionDetail_Medicine FOREIGN KEY(medicineId) REFERENCES Medicine(id);


       

    `);
};

exports.down = async function(knex) {
    await knex.raw(`

       
        ALTER TABLE Prescription ADD medicineId INT;
        ALTER TABLE Prescription ADD quantity INT;
        ALTER TABLE Prescription ADD dosage INT;
        ALTER TABLE Prescription ADD CONSTRAINT FK_Prescription_Medicine FOREIGN KEY(medicineId) REFERENCES Medicine(id);
        ALTER TABLE Medicine DROP COLUMN DateImport;
        ALTER TABLE Medicine DROP COLUMN QuantityImport;
        ALTER TABLE PrescriptionDetail DROP CONSTRAINT FK_PrescriptionDetail_Prescription;
        ALTER TABLE PrescriptionDetail DROP CONSTRAINT FK_PrescriptionDetail_Medicine;
        DROP TABLE PrescriptionDetail;
    `);
};