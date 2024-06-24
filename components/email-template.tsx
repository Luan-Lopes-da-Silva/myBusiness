import * as React from 'react';
import { Html, Button } from "@react-email/components";


interface EmailTemplateProps{
    name: string,
    typeOfFinancemente: string,
    value: string,
    email: string,
    phone: string,
    birthday: string
}

function EmailTemplate(props:EmailTemplateProps) {
  const { name,birthday,email,phone,typeOfFinancemente,value
   } = props;
  return (
    <Html lang="en">
      <Button href={'#'}>{name}</Button>
    </Html>
  );
}

export default EmailTemplate;