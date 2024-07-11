export class CreateDocumentDto {
    readonly name: string;
    readonly data: Buffer; // Aquí podrías usar otro tipo adecuado, dependiendo de cómo manejas los datos binarios
  }
