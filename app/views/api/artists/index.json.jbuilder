@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :about
        json.trackIds []
        json.albumIds []
    end
end