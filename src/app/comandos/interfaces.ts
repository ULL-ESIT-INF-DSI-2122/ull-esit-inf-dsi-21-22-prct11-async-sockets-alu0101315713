/**
 * Add note interface
 */
export interface lsInterface {
    ls(): void;
}

/**
   * Add user directory interface
   */
export interface mkdirInterface {
    mkdir(): void;
}

/**
   * List notes interface
   */
export interface listFilesInterface {
    lsfiles(): void;
}

export interface catInterface {
    cat(): void;
}

export interface rmInterface {
    rm(): void;
}

export interface mvinterface {
    mv(): void;
}

export interface cpInterface {
    cp(): void;
}

export interface addnoteInterface {
    addNote(): void;
}

export interface modifynoteInterface {
    modifyNote(): void;
}

export interface removeInterface {
    removeNote(): void;
}

export interface listInterface {
    list(): void;
}

export interface adduserInterface {
    adduser(): void;
}

export interface readInterface {
    readNote(): void;
}
