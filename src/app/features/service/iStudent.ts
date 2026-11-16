export enum DisorderStatus {
    NONE = 'NONE',
    UNDER_INVESTIGATION = 'UNDER_INVESTIGATION',
    CONFIRMED = 'CONFIRMED',
    NOT_INFORMED = 'NOT_INFORMED'
}

export interface IStudent {
    id: string,
    profileUrl: string,
    birthDate?: Date,
    fullName: string,
    fullClass: IClass,
    hasPEI: boolean,
    disorderStatus: DisorderStatus,
    disorders: IDisorder[],
    active: boolean,
    classCouncil: IClassCouncilValue[],
    resultClassCouncil: number
}

export interface ISubject {
    id: string,
    subjectName: string
}

export interface IClass {
    id: string,
    code: string,
    fullDescription: string,
    identifier: string,
    schoolYear: number,
    shift: string,
    active: boolean
}

export enum BehaviorGrade {
    S = "S",
    N = "N",
    AV = "AV",
}

export interface IClassCouncilValue {
    id: string,
    grade: BehaviorGrade
}

export interface IClassCouncil {
    id: string,
    label: string,
    valueToS: number,
    valueToAV: number,
    valueToN: number,
}


export interface IDisorder {
    id: string,
    code: string,
    name: string,
    abbreviation: string,
    active: boolean
}

/*  CLASSES ID */
const classID = {
    "1A": "UmLAR4COeiorgbTL082V",
    "1B": "tEe8fcPM78S035cSwFvL",
    "1C": "1qcDgGe6EPqX9WWG9sTr",
    "2A": "VjUwObkyDDM7wXiZpLEc",
    "2B": "hdfVbbtuvr7kGW2DMxoc",
    "2C": "0SvWqdBarej1XVV4J5vs",
    "2D": "7FUTIe61Ina0b58VMcjz",
    "3A": "T1fmj2MrmSjbycaro1S9",
    "3B": "X2DWfbkaMp919ck7i0lv",
    "3C": "OT3qPQgnSqgz3R7pimwp",
    "4A": "L6978Q66dEjbcA77zwVg",
    "4B": "3jNmZAjhqqvswaiTPMO0",
    "4C": "n7n85qIeVMTSGOcIIwGC",
    "5A": "GorvywPP0VmRYhNlxJsB",
    "5B": "BzJKEyKWXbOxw7sOgii2",
    "5C": "Bnmoxu0Ndf10SBEEyuvv",
    "6A": "jmpBDNSdD7SAv37JFdJm",
    "6B": "aPQ33vu1WUDXOh5VBU4W",
    "6C": "U2Y9SFFQPZmNcWHMxQQA",
    "7A": "LqCih9saapFhNFHeoN71",
    "7B": "aGpg760CZ0DW1nEuRjdZ",
    "7C": "4sUx38PBhKRoOl3CeZKu",
    "8A": "twAESv6nBxBRsZ3TtMZx",
    "8B": "DPDNGN0vsKxMmyYwHheP",
    "8C": "a2t1InKjJCY7w6jkVIcM",
    "9A": "fnlrtbn9ip28n6HyFvBS",
    "9B": "Moqg353Na8KCI1RxZVpf",
    "9C": "qLRB8NESlhtY6AyWOfjh",
}