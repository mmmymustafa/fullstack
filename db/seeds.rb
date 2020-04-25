Artist.destroy_all
Album.destroy_all
Track.destroy_all
Annotation.destroy_all
Comment.destroy_all
Upvote.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist1 = Artist.create(name:'Elsa', about: 'She\'s basically a blonde Sub-Zero from Mortal Kombat', picture_url: 'http://babychattel.com/wp-content/uploads/2013/12/princess-elsa-frozen-disney-movie-idina-menzel-300x300.jpg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album1 = Album.create(title: 'Frozen Soundtrack', release_date: 'November 25, 2013', artist_id: artist1.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_2013_soundtrack.png', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track1 = Track.create(title: 'Let It Go', artist_id: artist1.id, album_id: album1.id, about: 'From the movie Frozen', track_link: "https://embed.music.apple.com/us/album/let-it-go/1440626755?i=1440626764&mt=1&app=music", lyrics: 
'The snow glows white on the mountain tonight
Not a footprint to be seen
A kingdom of isolation
And it looks like I\'m the queen

The wind is howling like this swirling storm inside
Couldn\'t keep it in, heaven knows I\'ve tried
Don\'t let them in, don\'t let them see
Be the good girl you always have to be
Conceal, don\'t feel, don\'t let them know
Well, now they know

Let it go, let it go
Can\'t hold it back anymore
Let it go, let it go
Turn away and slam the door
I don\'t care what they\'re going to say
Let the storm rage on
The cold never bothered me anyway

Let it go, let it go
Can\'t hold it back anymore
Let it go, let it go
Turn away and slam the door

Let it go (go, go, go go, go go, go go, go, go, go go)
 
Let it go
 
Let it go
 
Let it go

It\'s funny how some distance makes everything seem small
And the fears that once controlled me can\'t get to me at all
It\'s time to see what I can do
To test the limits and break through
No right, no wrong, no rules for me
I\'m free

Let it go, let it go
I am one with the wind and sky
Let it go, let it go
You\'ll never see me cry
Here I stand and here I stay
Let the storm rage on

My power flurries through the air into the ground
My soul is spiraling in frozen fractals all around
And one thought crystallizes like an icy blast
I\'m never going back, the past is in the past

Let it go
The cold never bothered me anyway
Let it go, let it go
And I\'ll rise like the break of dawn
Let it go, let it go
That perfect girl is gone
Here I stand in the light of day
Let the storm rage on')

album5 = Album.create(title: 'Frozen II Soundtrack', release_date: 'November 15, 2019', artist_id: artist1.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/a/af/Frozen_2_soundtrack.png', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track5 = Track.create(title: 'Into The Unknown', artist_id: artist1.id, album_id: album5.id, about: 'From the movie Frozen II', track_link: "https://embed.music.apple.com/us/album/into-the-unknown/1487738280?i=1487738283&mt=1&app=music", lyrics: 
'I can hear you but I won\'t
Some look for trouble while others don\'t
There\'s a thousand reasons I should go about my day
And ignore your whispers which I wish would go away, oh
Whoa

You\'re not a voice, you\'re just a ringing in my ear
And if I heard you, which I don\'t, I\'m spoken for I fear
Everyone I\'ve ever loved is here within these walls
I\'m sorry, secret siren, but I\'m blocking out your calls
I\'ve had my adventure, I don\'t need something new
I\'m afraid of what I\'m risking if I follow you

Into the unknown
Into the unknown
Into the unknown
Oh
Oh

What do you want? \'Cause you\'ve been keeping me awake
Are you here to distract me so I make a big mistake?
Or are you someone out there who\'s a little bit like me?
Who knows deep down I\'m not where I\'m meant to be?
Every day\'s a little harder as I feel my power grow
Don\'t you know there\'s part of me that longs to go

Into the unknown
Into the unknown
Into the unknown
Oh
Oh
Whoa

Are you out there?
Do you know me?
Can you feel me?
Can you show me?

oh
Ah oh
Ah oh
Ah oh
Ah oh
Ah oh

Where are you going? Don\'t leave me alone
How do I follow you
Into the unknown?')

track6 = Track.create(title: 'Show Yourself', artist_id: artist1.id, album_id: album5.id, about: 'From the movie Frozen II', track_link: "https://embed.music.apple.com/us/album/show-yourself/1487738280?i=1487738499&mt=1&app=music", lyrics:
'Every inch of me is trembling
But not from the cold
Something is familiar
Like a dream I can reach but not quite hold
I can sense you there
Like a friend I\'ve always known
I\'m arriving
And it feels like I am home

I have always been a fortress
Cold secrets deep inside
You have secrets, too
But you don\'t have to hide

Show yourself
I\'m dying to meet you
Show yourself
It\'s your turn
Are you the one I\'ve been looking for
All of my life?
Show yourself
I\'m ready to learn

Ah ah ah ah

Ah ah ah ah ah

I\'ve never felt so certain
All my life I\'ve been torn
But I\'m here for a reason
Could it be the reason I was born?
I have always been so different
Normal rules did not apply
Is this the day?
Are you the way
I finally find out why?

Show yourself
I\'m no longer trembling
Here I am
I\'ve come so far
You are the answer I\'ve waited for
All of my life
Oh, show yourself
Let me see who you are

Come to me now
Open your door
Don\'t make me wait
One moment more
Oh, come to me now
Open your door
Don\'t make me wait
One moment more

Where the north wind meets the sea

Ah ah ah ah

There\'s a river

Ah ah ah ah

Full of memory

Come, my darling, homeward bound

I am found

Show yourself
Step into your power
Throw yourself
Into something new

You are the one you\'ve been waiting for

All of my life

All of your life

Oh, show yourself

Ah ah ah

Ah ah ah

Ah ah ah')

artist2 = Artist.create(name:'Timon & Pumbaa', about: 'Don\'t try to come up with a better duo because you can\'t', picture_url: 'https://resizing.flixster.com/2fODhxpP6Mr8W-cB6GR-BQPAERg=/300x300/v1.bjszODQxOTY7ajsxODMxOTsxMjAwOzIwNDg7MTE1Mg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album2 = Album.create(title: 'Lion King Soundtrack', release_date: 'June 24, 1994', artist_id: artist2.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Lion_King_%28soundtrack%29.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track2 = Track.create(title: 'Hakuna Matata', artist_id: artist2.id, album_id: album2.id, about: 'From the movie Lion King', track_link: "https://embed.music.apple.com/us/album/hakuna-matata/1445732923?i=1445732931&mt=1&app=music", lyrics: 
'Hakuna Matata!
What a wonderful phrase
Hakuna Matata!
Ain\'t no passing craze

It means no worries
For the rest of your days
It\'s our problem-free philosophy
Hakuna Matata!

Why, when he was a young warthog
When I was a young wart-hoooog!
Very nice!
Thanks!
He found his aroma lacked a certain appeal
He could clear the Savannah after every meal
I\'m a sensitive soul, though I seem thick-skinned
And it hurt that my friends never stood downwind
And oh, the shame
(He was ashamed!)
Thought of changin\' my name
(Oh, what\'s in a name?)
And I got downhearted
(How did you feel?)
Every time that I-
Pumbaa! Not in front of the kids!
Oh... sorry

Hakuna Matata!
What a wonderful phrase
Hakuna Matata!
Ain\'t no passing craze
It means no worries
For the rest of your days
Yeah, sing it, kid!
It\'s our problem-free philosophy
Hakuna Matata!

Hakuna Matata
Hakuna Matata
Hakuna Matata
Hakuna

It means no worries
For the rest of your days
It\'s our problem-free philosophy
Hakuna Matata')

artist3 = Artist.create(name:'Aladdin', about: 'Straight up pimpin with his flyin carpet boiiii', picture_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8FCbhgPJzOPaGLQ60RZUMVpn0n0sXHIAW0qxR_Vl8hsWAFy9Kg&s', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album3 = Album.create(title: 'Aladdin Soundtrack', release_date: 'November 25, 1992', artist_id: artist3.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Disney%27s_Aladdin_soundtrack_cover.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track3 = Track.create(title: 'A Whole New World', artist_id: artist3.id, album_id: album3.id, about: 'From the movie Lion King', track_link: "https://embed.music.apple.com/us/album/a-whole-new-world-soundtrack-version/1440722016?i=1440722284&mt=1&app=music", lyrics: 
'I can show you the world
Shining, shimmering, splendid
Tell me, princess, now when did
You last let your heart decide?

I can open your eyes
Take you wonder by wonder
Over, sideways and under
On a magic carpet ride

A whole new world
A new fantastic point of view
No one to tell us no
Or where to go
Or say we\'re only dreaming

A whole new world
A dazzling place I never knew
But when I\'m way up here
It\'s crystal clear
That now I\'m in a whole new world with you
Now I\'m in a whole new world with you

Unbelievable sights
Indescribable feeling
Soaring, tumbling, freewheeling
Through an endless diamond sky

A whole new world
Don\'t you dare close your eyes
A hundred thousand things to see
Hold your breath - it gets better
I\'m like a shooting star
I\'ve come so far
I can\'t go back to where I used to be

A whole new world
Every turn a surprise
With new horizons to pursue
Every moment red-letter
I\'ll chase them anywhere
There\'s time to spare
Let me share this whole new world with you

A whole new world
That\'s where we\'ll be
A thrilling chase
A wondrous place
For you and me')

artist4 = Artist.create(name:'Hannah Montana', about: 'idk she kinda reminds me of Miley Cyrus', picture_url: 'http://images4.fanpop.com/image/photos/15800000/Hannah-Montana-rocket-girl-15849131-300-300.jpg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album4 = Album.create(title: 'Hannah Montana 2: Meet Miley Cyrus', release_date: 'June 26, 2007', artist_id: artist4.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/3/35/Hannah_Montana_2.png', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track4 = Track.create(title: 'Nobody\'s Perfect', artist_id: artist4.id, album_id: album4.id, about: 'From the movie Lion King', track_link: "https://embed.music.apple.com/us/album/nobodys-perfect/1452858684?i=1452858869&mt=1&app=music", lyrics: 
'Everybody makes mistakes
Everybody has those days
One, two, three, four!

Everybody makes mistakes
Everybody has those days (oh yeah)
Everybody knows what I\'m talkin\' \'bout
Everybody gets that way (that\'s right)
Everybody makes mistakes (uh huh)
Everybody has those days
Everybody knows what I\'m talkin\' \'bout
Everybody gets that way (yeah)

Sometimes I\'m in a jam
I\'ve gotta make a plan
It might be crazy
I do it anyway
No way to know for sure
I\'ll figure out a cure
I\'m patchin\' up the holes
But then it overflows
If I\'m not doin\' too well
Why be so hard on myself?

Nobody\'s perfect!
I gotta work it!
Again and again till I get it right
Nobody\'s perfect!
You live and you learn it!
And if I\'m messing up sometimes (hey)
Nobody\'s perfect

Sometimes I work a scheme
But then it flips on me
Doesn\'t turn out how I planned
Get stuck in quick sand
No problem, can be solved
Once I get involved
I try to be delicate
Then crash right into it
My intentions are good, yeah yeah yeah
Sometimes just misunderstood

Nobody\'s perfect!
I gotta work it! (work it!)
Again and again till I get it right (that\'s right)
Nobody\'s perfect!
You live and you learn it!
And if I\'m messing up sometimes

Nobody\'s perfect!
I gotta work it! (come on)
I know in time I\'ll find a way (oh)
Nobody\'s perfect!

Sometimes I fix things up
And they fall apart again
Nobody\'s perfect

I know I mix things up
But I always get it right in the end
You know what I do

Next time you feel like (feel like)
It\'s just one of those days (one of those days)
When you just can\'t seem to win
If things don\'t turn out the way you plan (if things don\'t turn out the way you plan)
Figure something else out! (figure something else out!)
Don\'t stay down! (Don\'t stay down!)
Try again! (Try again!)
Yeah!

Everybody makes mistakes
Everybody has those days (that\'s right)
Everybody knows what, what I\'m talkin\' \'bout
Everybody gets that way
Everybody makes mistakes (here we go)
Everybody has those days (uh huh)
Everybody knows what, what I\'m talkin\' \'bout
Everybody gets that way

Nobody\'s perfect!
I gotta work it! (work it!)
Again and again till I get it right!
Nobody\'s perfect!
Ya live and ya learn it!
And if I\'m messing up sometimes
Nobody\'s perfect!
I gotta work it!
I know in time I\'ll find a way

Nobody\'s perfect!
You live and you learn it!
\'Cause everybody makes mistakes!
Nobody\'s perfect

Nobody\'s perfect!
No, no, nobody\'s perfect!')

artist5 = Artist.create(name:'Repunzel', about: 'Blonde hair, tall hair, don\'t care', picture_url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/34535824_1214474352028186_4458218865482006528_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_ohc=nvctcFv24IAAX-IZ1Of&_nc_ht=scontent-sjc3-1.xx&oh=5029e7f3bc386ea1e3fd34c2137883db&oe=5EA18714', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album6 = Album.create(title: 'Tangled Soundtrack', release_date: 'November 16, 2010', artist_id: artist5.id , about:'the album title says it all', album_cover_url: 'https://img.discogs.com/fQr6TzCiIWoipqAAIQcXgq_VXLM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3526286-1357874140-6575.jpeg.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track7 = Track.create(title: 'When Will My Life Begin', artist_id: artist5.id, album_id: album6.id, about: 'From the movie Tangled', track_link: "https://embed.music.apple.com/us/album/when-will-my-life-begin/1440639057?i=1440639066&mt=1&app=music", lyrics:
'Seven a.m., the usual morning lineup
Start on the chores and sweep \'till the floor\'s all clean
Polish and wax, do laundry, and mop and shine up
Sweep again, and by then it\'s like 7:15

And so I\'ll read a book
Or maybe two or three
I\'ll add a few new paintings to my gallery
I\'ll play guitar and knit
And cook and basically
Just wonder when will my life begin?

Then after lunch it\'s puzzles and darts and baking
Paper mache, a bit of ballet and chess
Pottery and ventriloquy, candle making
Then I\'ll stretch, maybe sketch, take a climb
Sew a dress!

And I\'ll reread the books
If I have time to spare
I\'ll paint the walls some more
I\'m sure there\'s room somewhere
And then I\'ll brush and brush
And brush and brush my hair
Stuck in the same place I\'ve always been

And I\'ll keep wanderin\' and wanderin\'
And wanderin\' and wonderin\'
When will my life begin?

And tomorrow night
The lights will appear
Just like they do on my birthday each year
What is it like
Out there where they glow?
Now that I\'m older
Mother might just
Let me go')

track8 = Track.create(title: 'I See The Light', artist_id: artist5.id, album_id: album6.id, about: 'From the movie Tangled', track_link: "https://embed.music.apple.com/us/album/i-see-the-light/1440639057?i=1440639422&mt=1&app=music", lyrics:
'All those days watching from the windows
All those years outside looking in
All that time never even knowing
Just how blind I\'ve been
Now I\'m here blinking in the starlight
Now I\'m here suddenly I see
Standing here it\'s all so clear
I\'m where I\'m meant to be

And at last I see the light
And it\'s like the fog has lifted
And at last I see the light
And it\'s like the sky is new
And it\'s warm and real and bright
And the world has somehow shifted
All at once everything looks different
Now that I see you

All those days chasing down a daydream
All those years living in a blur
All that time never truly seeing
Things, the way they were
Now she\'s here shining in the starlight
Now she\'s here suddenly I know
If she\'s here it\'s crystal clear
I\'m where I\'m meant to go

And at last I see the light

And it\'s like the fog has lifted

And at last I see the light

And it\'s like the sky is new

And it\'s warm and real and bright
And the world has somehow shifted
All at once everything is different
Now that I see you

Now that I see you')

track9 = Track.create(title: 'Healing Incantation', artist_id: artist5.id, album_id: album6.id, about: 'From the movie Tangled', track_link: "https://embed.music.apple.com/us/album/healing-incantation/1440639057?i=1440639430&mt=1&app=music", lyrics:
'Flower, gleam and glow
Let your power shine
Make the clock reverse
Bring back what once was mine

Heal what has been hurt
Change the Fates\' design
Save what has been lost
Bring back what once was mine

What once was mine')

artist6 = Artist.create(name:'Troy & Gabriella', about: 'Not a better duo than Timon & Pumbaa', picture_url: 'https://lastfm.freetls.fastly.net/i/u/300x300/61093c3dc0a43c1ba69246a8d72232dd.jpg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album7 = Album.create(title: 'High School Musical', release_date: 'January 10, 2006', artist_id: artist6.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/d/df/HighschoolmusicalCD.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track10 = Track.create(title: 'Start of Something New', artist_id: artist6.id, album_id: album7.id, about: 'From the movie High School Musical', track_link: "https://embed.music.apple.com/us/album/start-of-something-new/1440746457?i=1440746460&mt=1&app=music", lyrics:
'Livin\' in my own world
Didn\'t understand
That anything could happen
When you take a chance

I never believed in
What I couldn\'t see
I never opened my heart
To all the possibilities

I know that something
Has changed
Never felt this way
And right here tonight
This could be the
Start of something new
It feels so right to be here with you
And now I\'m lookin\' in your
Eyes I feel in my heart (I feel in my heart)
The start of something new

Now who would ever thought that
We\'d both be here tonight
And the world looks so much brighter
(Brighter, brighter)
With you by my side (by my side)

I know that something has changed never
Felt this way
I know it for real
This could be the

Start of something new
It feels so
Right to be here with you
And now I\'m lookin\'
In your eyes
I feel in my heart
The start of something new

I never knew
That it could happen
\'Til it happened to me

I didn\'t know it before
But now it\'s
Easy to see

It\'s the start of something new
It feels so right
To be here with you
And now I\'m lookin\'
In your eyes
I feel in my heart
That it\'s the start of something new
It feels so right (so right)
To be here
With you and now
I\'m lookin\' in your
Eyes (lookin\' in your eyes) I feel in my heart (I feel in my heart)
The start of something new
The start of something new
The start of something new')

track11 = Track.create(title: 'Get\'cha Head In The Game', artist_id: artist6.id, album_id: album7.id, about: 'From the movie High School Musical (Only Troy Performes in this track)', track_link: "https://embed.music.apple.com/us/album/getcha-head-in-the-game/1440746457?i=1440746953&mt=1&app=music", lyrics:
'Coach said to fake right and break left
Watch out for the pick and keep an eye on defense
Gotta run the give and go and take the ball to the hole
But don\'t be afraid to shoot the outside "J"

Just keep ya head in the game
Just keep ya head in the game

And don\'t be afraid to shoot the outside "J"
Just keep ya head in the game

You gotta, get\'cha
Get\'cha head in the game
We gotta get our, get our, get our
Get our head in the game

You gotta, get\'cha
Get\'cha head in the game
We gotta get our, get our, get our
Get our head in the game

Come on, get\'cha
Get\'cha head in the game
We gotta get our, get our, get our
Get our head in the game

You gotta, get\'cha
Get\'cha head in the game
We gotta get our, get our, get our
Get our head in the game
Whoa!

Let\'s make sure that we get the rebound
\'Cause when we get it then the crowd will go wild
A second chance, gotta grab it and go
Maybe this time we\'ll hit the right notes

Wait a minute, it\'s not the time or place
Wait a minute, get my head in the game
Wait a minute, get my head in the game
Wait a minute, wait a minute

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

Come on, get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game
Whoa!

Why am I feeling so wrong?
My head\'s in the game
But my heart\'s in the song
She makes this feel so right

Should I go for it?
Better shake this, yikes!

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

Come on, get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game

I gotta get my
Get my head in the game
You gotta get\'cha, get\'cha, get\'cha
Get\'cha head in the game
Whoa!')

track12 = Track.create(title: 'What I\'ve Been Looking For', artist_id: artist6.id, album_id: album7.id, about: 'From the movie High School Musical', track_link: "https://embed.music.apple.com/us/album/what-ive-been-looking-for-reprise/1440746457?i=1440746975&mt=1&app=music", lyrics:
'It\'s hard to believe
That I couldn\'t see
You were always there beside me

Thought I was alone
With no one to hold

But you were always right beside me
This feeling\'s like no other
I want you to know

I\'ve never had someone that knows me like you do
The way you do
I\'ve never had someone as good for me as you
No one like you
So lonely before I finally found
What I\'ve been looking for')

track13 = Track.create(title: 'When There Was Me and You', artist_id: artist6.id, album_id: album7.id, about: 'From the movie High School Musical (Only Gabriella performs in this track)', track_link: "https://embed.music.apple.com/us/album/when-there-was-me-and-you/1440746457?i=1440747173&mt=1&app=music", lyrics:
'It\'s funny when you find yourself
Looking from the outside
I\'m standing here but all I want
Is to be over there

Why did I let myself believe
Miracles could happen?
\'Cause now I have to pretend
That I don\'t really care

I thought you were my fairy tale
A dream when I\'m not sleeping
A wish upon a star
That\'s coming true

But everybody else could tell
That I confused my feelings with the truth
When there was me and you

I swore I knew the melody
That I heard you singing
And when you smiled you made me feel
Like I could sing along

But then you went and changed the words
Now my heart is empty
I\'m only left with used-to-be\'s
And once upon a song

Now I know you\'re not a fairy tale
And dreams were meant for sleeping
And wishes on a star
Just don\'t come true

\'Cause now even I can tell
That I confused my feelings with the truth
Because I liked the view
When there was me and you

I can\'t believe that I could be so blind
It\'s like you were floating while I was falling
And I didn\'t mind

\'Cause I liked the view
I thought you felt it too
When there was me and you')

track14 = Track.create(title: 'Breaking Free', artist_id: artist6.id, album_id: album7.id, about: 'From the movie High School Musical', track_link: "https://embed.music.apple.com/us/album/breaking-free/1440746457?i=1440747342&mt=1&app=music", lyrics:
'We\'re soarin\', flyin\'
There\'s not a star in heaven
That we can\'t reach

If we\'re trying
So breaking free

You know the world can see us
In a way that\'s different than who we are

Creating space between us
\'Till we\'re separate hearts

But your faith it gives me strength
Strength to believe

We\'re breakin\' free

We\'re soarin\'

Flyin\'

There\'s not a star in heaven
That we can\'t reach

If we\'re trying

Yeah we\'re breaking free

Oh, we\'re breakin\' free

Ohhhh

Can you feel it building
Like a wave the ocean just can\'t control

Connected by a feeling
Ohhh, in our very souls

Very souls
Ooooh

Rising \'till it lifts us up
So every one can see

We\'re breakin\' free

We\'re soarin\'

Flyin\'

There\'s not a star in heaven
That we can\'t reach

If we\'re trying

Yeah we\'re breaking free
Ohhh, breaking free
Oooh

Runnin\'
Climbin\'
To get to that place
To be all that we can be

Now\'s the time
So breaking free
We\'re breaking free

Ohhh, yeah
More than hope
More than faith
This is true
This is fate
And together
We see it comin\'

More than you
More than me
Not a want, but a need
Both of us breakin\' free

Soarin\'
Flyin\'
There\'s not a star in heaven
That we can\'t reach
If we\'re trying
Yeah we\'re breaking free
Breaking free

We\'re runnin\'
Ohhh, climbin\'
To get to the place
To be all that we can be
Now\'s the time
Now\'s the time
So we\'re breaking free
Ohhh, we\'re breaking free
Ohhh

You know the world can see us
In a way that\'s different than who we are')
