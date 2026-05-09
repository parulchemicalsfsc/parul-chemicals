import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('id', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newReview = await request.json();
    
    const { data, error } = await supabase
      .from('reviews')
      .insert([{
        ...newReview,
        approved: false,
        date: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, review: data[0] });
  } catch (error) {
    console.error('Error saving review:', error);
    return NextResponse.json({ error: 'Failed to save review' }, { status: 500 });
  }
}
