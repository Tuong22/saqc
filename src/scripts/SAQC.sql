USE Btec_eOffice;
-- Tạo Schema SAQC
CREATE SCHEMA SAQC;

SELECT name
FROM sys.schemas;

-- Bộ mẫu 
CREATE TABLE Btec_eOffice.SAQC.Samples (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	Sample nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)

-- Phân xưởng
CREATE TABLE Btec_eOffice.SAQC.Workshops (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	Workshop nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)

-- Điểm lấy mẫu
CREATE TABLE Btec_eOffice.SAQC.SamplingPoint (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	Workshop nvarchar(255) NOT NULL,
	SamplingPoint nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Tên mẫu
CREATE TABLE Btec_eOffice.SAQC.SampleName (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	SampleName nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Phương pháp thử nghiệm
CREATE TABLE Btec_eOffice.SAQC.TestingMethod (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	TestingMethod nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Chỉ tiêu kiểm soát
CREATE TABLE Btec_eOffice.SAQC.ControlCriteria (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	TestingMethod nvarchar(255) NOT NULL,
	SamplingPoint nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Phòng thử nghiệm 
CREATE TABLE Btec_eOffice.SAQC.Laboratory (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),  
	Code nvarchar(255) NOT NULL,
	Room CHAR(2) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Loại Tần suất
CREATE TABLE Btec_eOffice.SAQC.FrequencyType (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	FrequencyType nvarchar(255) NOT NULL,
	Description nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
--  Đơn Vị
CREATE TABLE Btec_eOffice.SAQC.Roles (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	Code nvarchar(255) NOT NULL,
	Name nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Đơn vị của các User
CREATE TABLE Btec_eOffice.SAQC.UserRoles (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	RoleId nvarchar(255) NOT NULL,
	UserId nvarchar(255) NOT NULL,
	DepartmentId nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Tần suất - Kế hoạch Plan
CREATE TABLE Btec_eOffice.SAQC.FPFrequency (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	PlanID VARCHAR(10) NOT NULL,
	Year int NOT NULL,
	PreviousChange nvarchar(30) NOT NULL,
	AfterChange nvarchar(30) NOT NULL,
	UserID UNIQUEIDENTIFIER NOT NULL,
	Level nvarchar(30) NOT NULL,
	Note nvarchar(255),
	IsDeleted BIT NOT NULL,
)
-- Ý kiến của các đơn vị/Ban liên quan
CREATE TABLE Btec_eOffice.SAQC.FPRelevantUnitFeedback (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	UserId UNIQUEIDENTIFIER NOT NULL,
	Time DATETIME NOT NULL,
	Feedback nvarchar(255) NOT NULL,
	IsDeleted BIT NOT NULL,
)
-- Kế hoạch kiểm soát chất lượng Phân tích mẫu
CREATE TABLE Btec_eOffice.SAQC.Plans (
	Id UNIQUEIDENTIFIER PRIMARY KEY NOT NULL DEFAULT NEWSEQUENTIALID(),
	PlanID VARCHAR(20) NOT NULL,
	WorkshopID UNIQUEIDENTIFIER NOT NULL,
	SamplingPointID UNIQUEIDENTIFIER NOT NULL,
	MainPurpose nvarchar(255) NOT NULL,
	SamplingProcess nvarchar(30) NOT NULL,
	TestingMethodID UNIQUEIDENTIFIER NOT NULL,
	ControlIndicator nvarchar(30) NOT NULL,
	BasicControl nvarchar(100),
	LaboratoryID UNIQUEIDENTIFIER NOT NULL,
	SamplingTime nvarchar(20),
	VHBTFrequency nvarchar(255) NOT NULL,
	HolidaysFrequency nvarchar(255) NOT NULL,
	Status INT NOT NULL,
	CONSTRAINT BIT CHECK (Status BETWEEN 0 AND 1)
)

-- Tạo trigger để cập nhật giá trị cho PlanID sau khi thêm bản ghi
CREATE TRIGGER trg_UpdatePlanID
ON Btec_eOffice.SAQC.Plans
AFTER INSERT
AS
BEGIN
    DECLARE @RowNum INT;
    SET @RowNum = (SELECT COUNT(*) FROM Btec_eOffice.SAQC.Plans);
    
    UPDATE p
    SET p.PlanID = 'BSR.KSCL.' + CAST(@RowNum AS VARCHAR(10))
    FROM Btec_eOffice.SAQC.Plans p
    JOIN inserted i ON p.Id = i.Id;
END;

-- Lấy thông tin giữa các database
DROP SCHEMA SAQC;
DROP TABLE SAQC.Samples;
DROP TABLE SAQC.Workshops;
DROP TABLE SAQC.SamplingPoint;
DROP TABLE SAQC.SampleName;
DROP TABLE SAQC.TestingMethod;
DROP TABLE SAQC.ControlCriteria;
DROP TABLE SAQC.Laboratory;
DROP TABLE SAQC.FrequencyType;
DROP TABLE SAQC.Roles;
DROP TABLE SAQC.UserRoles;

-- Add New Departments - BSR
INSERT INTO Btec_Core.dbo.Departments 
	(ID, Name, NoUser, OrderNumber, IsActive, Created, AuthorID, IsShow, DeptTypeID, EditorID, Modified, ServerAddress, DatabaseName, UserAccess, Password, Code) 
VALUES 
	(NEWID(), 'BSR', 0, 7, 1, SYSDATETIME(), '0775c424-0fe9-4b27-b401-126955a86595', 1 , '171bbde0-6e43-4b3b-81f2-9555cd54bd99', '0775c424-0fe9-4b27-b401-126955a86595', SYSDATETIME(), '', '', '', '', 'BSR');

-- Get BSR Department
SELECT * FROM Btec_Core.dbo.Departments WHERE Code='BSR';

-- Get all tables in Schema "SAQC"
SELECT TABLE_NAME
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA = 'SAQC' AND TABLE_TYPE = 'BASE TABLE';
