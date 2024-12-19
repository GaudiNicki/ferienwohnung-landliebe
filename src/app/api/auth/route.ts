import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        // Check if credentials are provided
        if (!username || !password) {
            return NextResponse.json(
                { error: 'Username and password are required' },
                { status: 400 }
            );
        }

        // Check username
        if (username !== process.env.ADMIN_USERNAME) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Decode the stored hash from base64
        const storedHash = Buffer.from(process.env.ADMIN_PASSWORD_HASH || '', 'base64').toString();

        // Verify password
        const passwordMatch = await bcrypt.compare(
            password,
            storedHash
        );

        if (!passwordMatch) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET || '',
            { expiresIn: '1h' }
        );

        return NextResponse.json({ token });
    } catch (error) {
        console.error('Authentication error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}