<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title' => 'The Art of War',
            'author' => 'Sun Tzu',
            'published_year' => -500,
            'genre' => 'Strategy',
            'description' => 'An ancient Chinese military treatise on warfare and strategy.',
        ]);
        
        Book::create([
            'title' => 'The Road',
            'author' => 'Cormac McCarthy',
            'published_year' => 2006,
            'genre' => 'Post-Apocalyptic',
            'description' => 'A bleak story of a father and son journeying through a devastated landscape.',
        ]);
        
        Book::create([
            'title' => 'A Brief History of Time',
            'author' => 'Stephen Hawking',
            'published_year' => 1988,
            'genre' => 'Science',
            'description' => 'An overview of cosmology, black holes, and the nature of time.',
        ]);
        
        Book::create([
            'title' => 'The Shining',
            'author' => 'Stephen King',
            'published_year' => 1977,
            'genre' => 'Horror',
            'description' => 'A horror novel about a family trapped in a haunted hotel.',
        ]);
        
        Book::create([
            'title' => 'The Alchemist',
            'author' => 'Paulo Coelho',
            'published_year' => 1988,
            'genre' => 'Adventure',
            'description' => 'A philosophical tale about a young shepherd on a journey to find his personal legend.',
        ]);
        
        Book::create([
            'title' => 'The Book Thief',
            'author' => 'Markus Zusak',
            'published_year' => 2005,
            'genre' => 'Historical Fiction',
            'description' => 'A story narrated by Death about a young girl in Nazi Germany.',
        ]);
        
        Book::create([
            'title' => 'Jane Eyre',
            'author' => 'Charlotte Brontë',
            'published_year' => 1847,
            'genre' => 'Gothic',
            'description' => 'A story about an orphaned girl’s journey to find love and independence.',
        ]);
        
        Book::create([
            'title' => 'Sapiens: A Brief History of Humankind',
            'author' => 'Yuval Noah Harari',
            'published_year' => 2011,
            'genre' => 'Non-Fiction',
            'description' => 'An exploration of human history from ancient to modern times.',
        ]);
        
        Book::create([
            'title' => 'Harry Potter and the Sorcerer’s Stone',
            'author' => 'J.K. Rowling',
            'published_year' => 1997,
            'genre' => 'Fantasy',
            'description' => 'A young wizard discovers his destiny at a magical school.',
        ]);
        
        Book::create([
            'title' => 'The Kite Runner',
            'author' => 'Khaled Hosseini',
            'published_year' => 2003,
            'genre' => 'Drama',
            'description' => 'A story of friendship, betrayal, and redemption set in Afghanistan.',
        ]);
        
    }
}
