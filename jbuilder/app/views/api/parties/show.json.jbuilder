json.extract! @party, :name

json.guests do
  json.array! @party.guests.includes(:gifts) do |guest|
    json.name guest.name
    # json.gifts do
    #   json.array! guest.gifts do |gift|
    #     json.title gift.title
    #     json.description gift.description
    #   end
    # end
    json.gifts guest.gifts, :title
  end
end
