class ShoppingCart
    def initialize currency
        @currency = currency
        @items = []
    end

    def add_item(item)
        @items.push(item)
    end

    def count_items
        @items.size
    end

    def checkout
        totalPrice = 0; moreThan5Items = count_items > 5
        @items.each { |item|
            totalPrice += item.price
        }
        if moreThan5Items
            itemTotal = Item.new 'total', totalPrice
            totalPrice = itemTotal.apply_discount 10
        end
        print_total totalPrice
    end

    def print_total total
        puts "Your total today is #{@currency}#{total}. Have a nice day!"
    end
end

class Item
    def initialize(name, price)
        @name = name
        @price = price
    end

    def price
        @price
    end

    def apply_discount porcentage
        @price -= @price * (porcentage / 100.0)
    end
end

class Houseware < Item
    def price
        if greaterThan100?
            apply_discount 5
        end
        @price
    end

    def greaterThan100?
        @price > 100
    end
end

class Fruit < Item
    def price
        if weekends?
            apply_discount 10
        end
        @price
    end

    def weekends?
        weekends = [0, 6]
        weekends.include?(Time.now.wday)
    end
end

joshs_cart = ShoppingCart.new '$'

banana = Fruit.new("Banana", 10)
vaccuum = Houseware.new("Vaccuum", 150)
oj = Item.new("Orange Juice", 10)
rice = Item.new("Rice", 1)
anchovies = Item.new("Anchovies", 2)

joshs_cart.add_item(banana)
joshs_cart.add_item(vaccuum)
joshs_cart.add_item(oj)
joshs_cart.add_item(rice)
joshs_cart.add_item(anchovies)

joshs_cart.checkout
