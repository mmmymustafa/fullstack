@artists.each do |artist|
    json.set! artist.id do
        json.extract! artist, :id, :name, :about, :picture_url, :header_pic_url
        json.trackIds []
        json.albumIds []
    end
end