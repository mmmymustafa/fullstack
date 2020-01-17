Artist.destroy_all
Album.destroy_all
Track.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist1 = Artist.create(name:'Elsa', about: 'She\'s basically a blonde Sub-Zero from Mortal Kombat', picture_url: 'http://babychattel.com/wp-content/uploads/2013/12/princess-elsa-frozen-disney-movie-idina-menzel-300x300.jpg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album1 = Album.create(title: 'Frozen Soundtrack', release_date: 'November 25, 2013', artist_id: artist1.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/8/89/Frozen_2013_soundtrack.png', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track1 = Track.create(title: 'Let It Go', artist_id: artist1.id, album_id: album1.id, about: 'From the movie Frozen', lyrics: 
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

artist2 = Artist.create(name:'Timon & Pumbaa', about: 'Don\'t try to come up with a better duo because you can\'t', picture_url: 'https://resizing.flixster.com/2fODhxpP6Mr8W-cB6GR-BQPAERg=/300x300/v1.bjszODQxOTY7ajsxODMxOTsxMjAwOzIwNDg7MTE1Mg', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album2 = Album.create(title: 'Lion King Soundtrack', release_date: 'NA', artist_id: artist2.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Lion_King_%28soundtrack%29.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track2 = Track.create(title: 'Hakuna Matata', artist_id: artist2.id, album_id: album2.id, about: 'From the movie Lion King', lyrics: 
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
Oh... sorry')

artist3 = Artist.create(name:'Aladdin', about: 'Straight up pimpin with his flyin carpet boiiii', picture_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8FCbhgPJzOPaGLQ60RZUMVpn0n0sXHIAW0qxR_Vl8hsWAFy9Kg&s', header_pic_url:'https://img.cinemablend.com/filter:scale/cb/a/2/4/e/2/f/a24e2f4993d189113b4124daa0142d1f77e8787ce304a265793cca30ed6384d9.jpg?mw=600')
album3 = Album.create(title: 'Aladdin Soundtrack', release_date: 'NA', artist_id: artist3.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Disney%27s_Aladdin_soundtrack_cover.jpg', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track3 = Track.create(title: 'A New World', artist_id: artist3.id, album_id: album3.id, about: 'From the movie Lion King', lyrics: 
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
album4 = Album.create(title: 'Hannah Montana 2: Meet Miley Cyrus', release_date: 'NA', artist_id: artist4.id , about:'the album title says it all', album_cover_url: 'https://upload.wikimedia.org/wikipedia/en/3/35/Hannah_Montana_2.png', track_banner: 'https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/11/elsa_and_anna_in_frozen_2_ending_0.jpg?itok=2IR6FDMs' )
track4 = Track.create(title: 'No Body\'s Perfect', artist_id: artist4.id, album_id: album4.id, about: 'From the movie Lion King', lyrics: 
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