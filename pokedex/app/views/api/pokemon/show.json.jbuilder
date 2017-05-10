json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
json.image_url asset_path(@poke.image_url)

json.items @poke.items
