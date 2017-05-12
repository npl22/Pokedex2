json.array! @parties.includes(:guests) do |party|
  json.name party.name
  json.guests do
    json.array! party.guests do |guest|
      json.name guest.name
    end
  end
end

# json.array! @parties, :name, :guests
