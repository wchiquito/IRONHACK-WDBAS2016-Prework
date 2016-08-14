class MilkShake
    def initialize
        @base_price = 3
        @ingredients = []
    end

    def add_ingredient(ingredient)
        @ingredients.push(ingredient)
    end

    def price_of_milkshake
        #Let's establish what our counter should be before we start adding ingredients
        #into the mix
        total_price_of_milkshake = @base_price
        #Add each ingredients price to our total
        @ingredients.each do |ingredient|
            total_price_of_milkshake += ingredient.price
        end
        #return  our total price to whoever called for it
        total_price_of_milkshake
    end
end

class Ingredient
    attr_reader :price

    def initialize(name, price)
        @name = name
        @price = price
    end
end

class ShakeShop
    def initialize
        @milkshakes = []
    end

    def add_milkshake(milkshake)
        @milkshakes.push(milkshake)
    end

    def checkoout
        total_price = 0
        @milkshakes.each { |milkshake|
            total_price += milkshake.price_of_milkshake
        }
        print_checkout @milkshakes.count, total_price
    end

    def print_checkout total_milkshakes, total_price
        puts "Milkshakes: #{total_milkshakes} | Total price: #{format("%.2f", total_price)}"
    end
end

oreo = MilkShake.new
oreo.add_ingredient Ingredient.new("3 scoops vanilla ice cream", 1.22)
oreo.add_ingredient Ingredient.new("¾ cup milk", 0.5)
oreo.add_ingredient Ingredient.new("6 chocolate sandwich cookies", 1.5)

salted_caramel = MilkShake.new
salted_caramel.add_ingredient Ingredient.new("1 pint vanilla bean ice cream", 0.97)
salted_caramel.add_ingredient Ingredient.new("½ cup whole milk", 0.5)
salted_caramel.add_ingredient Ingredient.new("¼ cup salted caramel sauce", 1.73)

smores = MilkShake.new
smores.add_ingredient Ingredient.new("3 cups vanilla ice cream, packed", 1.22)
smores.add_ingredient Ingredient.new("⅔ cups milk", 0.5)
smores.add_ingredient Ingredient.new("4 large marshmallows, toasted", 1.28)
smores.add_ingredient Ingredient.new("2 sheets regular graham crackers", 1.84)
smores.add_ingredient Ingredient.new("¼ cup chocolate hazelnut spread", 1.69)

basic = MilkShake.new

fan_of_milkshakes = ShakeShop.new
fan_of_milkshakes.add_milkshake oreo
fan_of_milkshakes.add_milkshake salted_caramel
fan_of_milkshakes.add_milkshake smores
fan_of_milkshakes.add_milkshake basic
fan_of_milkshakes.checkoout
