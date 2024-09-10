export class CreateDocumentDto {
  id: number
  merchantCustomerId: string
  merchantCustomerIban: string
  name: string

  documentType: number
}
