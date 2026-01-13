export class Reserva{
    constructor(
        public id?: number,
        public descripcion_dolor : string = '',
        public paciente : number = 0, /* id paciente */
        public doctor? : number, /* id doctor */
        public estado? : string,
        public nombre_paciente: string = '', /* no tiene q ser el mismo de la id */
        public fecha_creacion?: any 
    ) {}
}