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

artists = Artist.create(name:'Elsa', about: 'She\'s basically a blonde Sub-Zero from Mortal Kombat')
albums = Album.create(title: 'Frozen Soundtrack', release_date: 'November 25, 2013', artist_id: artists.id , about:'the album title says it all')
tracks = Track.create(title: 'Let It Go', artist_id: artists.id, album_id: albums.id, about: 'From the movie Frozen', lyrics: 
'The snow glows white on the mountain tonight
Not a footprint to be seen
A kingdom of isolation
And it looks like I\'m the queen
----
The wind is howling like this swirling storm inside
Couldn\'t keep it in, heaven knows I\'ve tried
Don\'t let them in, don\'t let them see
Be the good girl you always have to be
Conceal, don\'t feel, don\'t let them know
Well, now they know
----
Let it go, let it go
Can\'t hold it back anymore
Let it go, let it go
Turn away and slam the door
I don\'t care what they\'re going to say
Let the storm rage on
The cold never bothered me anyway
----
Let it go, let it go
Can\'t hold it back anymore
Let it go, let it go
Turn away and slam the door
----
Let it go (go, go, go go, go go, go go, go, go, go go)
 
Let it go
 
Let it go
 
Let it go
----
It\'s funny how some distance makes everything seem small
And the fears that once controlled me can\'t get to me at all
It\'s time to see what I can do
To test the limits and break through
No right, no wrong, no rules for me
I\'m free
----
Let it go, let it go
I am one with the wind and sky
Let it go, let it go
You\'ll never see me cry
Here I stand and here I stay
Let the storm rage on
----
My power flurries through the air into the ground
My soul is spiraling in frozen fractals all around
And one thought crystallizes like an icy blast
I\'m never going back, the past is in the past
----
Let it go
The cold never bothered me anyway
Let it go, let it go
And I\'ll rise like the break of dawn
Let it go, let it go
That perfect girl is gone
Here I stand in the light of day
Let the storm rage on')