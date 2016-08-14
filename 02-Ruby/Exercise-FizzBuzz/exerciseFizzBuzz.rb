DIVISIBLE_BY_THREE = 3
DIVISIBLE_BY_FIVE = 5
TEXT_THREE = 'Fizz'
TEXT_FIVE = 'Buzz'
TEXT_BANG = 'Bang'
IF_START_WITH_ONE = '1'

def add_text_bang number, text
    if not number.to_s.start_with?(IF_START_WITH_ONE)
        text = ''
    end
    text
end

def divisible_by number, divisor, text
    if number % divisor != 0
        text = ''
    end
    text
end

(1..100).each { |current|
    result = ''
    result << divisible_by(current, DIVISIBLE_BY_THREE, TEXT_THREE)
    result << divisible_by(current, DIVISIBLE_BY_FIVE, TEXT_FIVE)
    result << add_text_bang(current, TEXT_BANG)
    if result.empty?
        result = current.to_s
    end
    puts result
}
