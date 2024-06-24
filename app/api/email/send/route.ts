import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_BTKCaQN9_Fkafd8cgbe25WKNGN3Z2ev4Q')

export async function GET() {
    try {
        const {data} = await resend.emails.send({
            from:'lopesluan18@outlook.com',
            to: "lopesluan431@gmail.com",
            subject: 'Nova simulação',
            html: "<p>Olá mlk doido</p>"
        })
    return NextResponse.json({message:'Email sent', data})
    } catch (error) {
        return NextResponse.json({error})
    }
}