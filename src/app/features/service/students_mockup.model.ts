import { BehaviorGrade, DisorderStatus, IClass, IClassCouncil, IClassCouncilValue, IStudent, ISubject } from "./iStudent";

export const students: IStudent[] = [
    {
        id: "VXXOGUzx3YIYKiMQCPhI",
        active: true,
        fullName: "ALICE SOARES CÂNDIDO AGENOR",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Alice+Soares&background=E3F1E9&color=17563F",
        hasPEI: false,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.S
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.S
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.S
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.AV
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.AV
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.AV
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 4.2
    },
    {
        id: "AgvMpeyzDP9l7C1PUKpe",
        active: true,
        fullName: "ANA LAURA GONÇALVES",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Ana+Laura&background=E3F1E9&color=17563F",
        hasPEI: true,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.S
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.S
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.S
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.AV
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.AV
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.AV
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 4.2
    },
    {
        id: "41bHm0oXwnhFPVfmFr5J",
        active: true,
        fullName: "ANA CLARA FIDELIS BORGES",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Ana+Clara&background=E3F1E9&color=17563F",
        hasPEI: false,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.N
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.N
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.N
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.AV
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.AV
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.AV
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 4.2
    },
    {
        id: "A5OzV5oWghPZLLtVPIWw",
        active: true,
        fullName: "ARTHUR MIGUEL RODRIGUES DOS SANTOS",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Arthur+Miguel&background=E3F1E9&color=17563F",
        hasPEI: true,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.S
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.S
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.S
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.AV
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.AV
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.AV
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 4.2
    },
    {
        id: "oY0MB1azMPggxASZLb3K",
        active: true,
        fullName: "DANIEL BERNARDO DE SOUZA",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Daniel+Bernado&background=E3F1E9&color=17563F",
        hasPEI: true,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.S
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.S
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.S
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.AV
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.AV
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.AV
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 4.2
    },
    {
        id: "MYVPdabIpVLrFrRan4xF",
        active: true,
        fullName: "DANIEL LUCAS ARCANJO GUERRA PIO",
        birthDate: undefined,
        profileUrl: "https://ui-avatars.com/api/?name=Daniel+Lucas&background=E3F1E9&color=17563F",
        hasPEI: true,
        disorderStatus: DisorderStatus.NONE,
        disorders: [],
        fullClass: {
            active: true,
            code: "1A_2026",
            id: "UmLAR4COeiorgbTL082V",
            fullDescription: "1º Ano A",
            identifier: "A",
            schoolYear: 2026,
            shift: "Manhã"
        },
        classCouncil: [
            {
                id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
                grade: BehaviorGrade.S
            },
            {
                id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
                grade: BehaviorGrade.S
            },
            {
                id: "77453df1-4ffc-4019-856e-d530978b1b46",
                grade: BehaviorGrade.S
            },
            {
                id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
                grade: BehaviorGrade.S
            },
            {
                id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
                grade: BehaviorGrade.S
            },
            {
                id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
                grade: BehaviorGrade.S
            },
            {
                id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
                grade: BehaviorGrade.S
            },
            {
                id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
                grade: BehaviorGrade.S
            },
            {
                id: "c17f10be-946d-4055-a14e-99cf3f483122",
                grade: BehaviorGrade.S
            },
        ],
        resultClassCouncil: 5
    },
]

export const classes: IClass[] = [
    {
        id: "UmLAR4COeiorgbTL082V",
        active: true,
        code: "1A_2026",
        fullDescription: "1º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "tEe8fcPM78S035cSwFvL",
        active: true,
        code: "1B_2026",
        fullDescription: "1º Ano B",
        identifier: "B",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "1qcDgGe6EPqX9WWG9sTr",
        active: true,
        code: "1C_2026",
        fullDescription: "1º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "VjUwObkyDDM7wXiZpLEc",
        active: true,
        code: "2A_2026",
        fullDescription: "2º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "hdfVbbtuvr7kGW2DMxoc",
        active: true,
        code: "2B_2026",
        fullDescription: "2º Ano B",
        identifier: "B",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "0SvWqdBarej1XVV4J5vs",
        active: true,
        code: "2C_2026",
        fullDescription: "2º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "7FUTIe61Ina0b58VMcjz",
        active: true,
        code: "2D_2026",
        fullDescription: "2º Ano D",
        identifier: "D",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "T1fmj2MrmSjbycaro1S9",
        active: true,
        code: "3A_2026",
        fullDescription: "3º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "X2DWfbkaMp919ck7i0lv",
        active: true,
        code: "3B_2026",
        fullDescription: "3º Ano B",
        identifier: "B",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "OT3qPQgnSqgz3R7pimwp",
        active: true,
        code: "3C_2026",
        fullDescription: "3º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "L6978Q66dEjbcA77zwVg",
        active: true,
        code: "4A_2026",
        fullDescription: "4º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "3jNmZAjhqqvswaiTPMO0",
        active: true,
        code: "4B_2026",
        fullDescription: "4º Ano B",
        identifier: "B",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "n7n85qIeVMTSGOcIIwGC",
        active: true,
        code: "4C_2026",
        fullDescription: "4º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "GorvywPP0VmRYhNlxJsB",
        active: true,
        code: "5A_2026",
        fullDescription: "5º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Manhã"
    },
    {
        id: "BzJKEyKWXbOxw7sOgii2",
        active: true,
        code: "5B_2026",
        fullDescription: "5º Ano B",
        identifier: "A",
        schoolYear: 2026,
        shift: "Tarde"
    },
    {
        id: "Bnmoxu0Ndf10SBEEyuvv",
        active: true,
        code: "5C_2026",
        fullDescription: "5º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Tarde"
    },
    {
        id: "jmpBDNSdD7SAv37JFdJm",
        active: true,
        code: "6A_2026",
        fullDescription: "6º Ano A",
        identifier: "A",
        schoolYear: 2026,
        shift: "Tarde"
    },
    {
        id: "aPQ33vu1WUDXOh5VBU4W",
        active: true,
        code: "6B_2026",
        fullDescription: "6º Ano B",
        identifier: "B",
        schoolYear: 2026,
        shift: "Tarde"
    },
    {
        id: "U2Y9SFFQPZmNcWHMxQQA",
        active: true,
        code: "6C_2026",
        fullDescription: "6º Ano C",
        identifier: "C",
        schoolYear: 2026,
        shift: "Tarde"
    },
]

export const behaviorGrades: IClassCouncil[] = [
    {
        id: "83e56c40-9d58-4a94-8c57-03d5967f43c8",
        label: "Organiza material",
        valueToS: 0.4,
        valueToAV: 0.2,
        valueToN: 0
    },
    {
        id: "d8e524a6-a6c4-4b35-b10f-a58575435fdb",
        label: "Participa cooperativamente",
        valueToS: 0.4,
        valueToAV: 0.2,
        valueToN: 0
    },
    {
        id: "77453df1-4ffc-4019-856e-d530978b1b46",
        label: "Tem interesse",
        valueToS: 0.4,
        valueToAV: 0.2,
        valueToN: 0
    },
    {
        id: "7676952b-8de5-48b6-af0a-0ece27f04c9c",
        label: "Conserva o material",
        valueToS: 0.4,
        valueToAV: 0.2,
        valueToN: 0
    },
    {
        id: "3807ad10-c476-4bd8-b5b4-2051d591162b",
        label: "Cumpre regras",
        valueToS: 1,
        valueToAV: 0.5,
        valueToN: 0
    },
    {
        id: "2b53e9b1-6032-4b2c-898e-20ba5cd28257",
        label: "Ouve e respeita",
        valueToS: 1,
        valueToAV: 0.5,
        valueToN: 0
    },
    {
        id: "78c6e927-745a-43e4-8979-e67dfcfbb0d9",
        label: "Realiza as atividades",
        valueToS: 0.4,
        valueToAV: 0.2,
        valueToN: 0
    },
    {
        id: "dd06c1c7-b995-4159-a955-6ab2712a02ab",
        label: "Respeito ao próximo",
        valueToS: 1,
        valueToAV: 0.5,
        valueToN: 0
    },
    {
        id: "c17f10be-946d-4055-a14e-99cf3f483122",
        label: "Emite opiniões",
        valueToS: 1,
        valueToAV: 0.5,
        valueToN: 0
    },
]

export const subjects: ISubject[] = [
    {
        id: "a4175dfe-697d-436c-8430-027627377bdb",
        subjectName: "Português"
    },
    {
        id: "e9afdc05-7c09-4ab2-9f23-bb80dc724586",
        subjectName: "Matemática"
    },
    {
        id: "514d1262-a208-40d3-8a74-5dc903cb5fe9",
        subjectName: "Inglês"
    },
    {
        id: "506b75b0-4585-449f-9bbd-a6233f1ce8d4",
        subjectName: "História"
    },
    {
        id: "fe04c2b9-26ea-4fe9-8273-d136c38ce402",
        subjectName: "Geografia"
    },
    {
        id: "7b33fac4-c1f2-489f-9fd0-caf597d9987c",
        subjectName: "Arte"
    },
    {
        id: "69d9579f-1883-452f-8f7c-a7cb3bcdc2b4",
        subjectName: "Ciências"
    },
    {
        id: "1606c02e-a498-4294-828d-19549a5930da",
        subjectName: "Educação Física"
    },
]

export function getValueOnBehaviorGrade(behaviorGradeStudent: IClassCouncilValue) {
    const grade = behaviorGrades.find(behaviorGrade => behaviorGradeStudent.id === behaviorGrade.id);
    if (!grade) return -1;

    if (behaviorGradeStudent.grade === BehaviorGrade.S) return grade.valueToS;
    if (behaviorGradeStudent.grade === BehaviorGrade.AV) return grade.valueToAV;
    if (behaviorGradeStudent.grade === BehaviorGrade.N) return grade.valueToN;
    else return -1;
}

