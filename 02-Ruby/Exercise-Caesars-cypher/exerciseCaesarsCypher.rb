TOTAL_WORDS      = 26
MIN_WORD         = 97
MAX_WORD         = 122
WHITE_SPACE_NUM  = 32
WHITE_SPACE_CHAR = WHITE_SPACE_NUM.chr
NEGATIVE         = -1
DELIMITER        = ''

def adjust_shift shift_size
    shift_size_adjust = shift_size.abs.modulo TOTAL_WORDS
    if shift_size < 0
        shift_size_adjust *= NEGATIVE 
    end
    shift_size_adjust
end

def sanitize_input input
    input.gsub(/\s+/, WHITE_SPACE_CHAR)
end

def adjust_character characterord, character_plus_shift
    if character_plus_shift < MIN_WORD
        characterord += TOTAL_WORDS
    elsif character_plus_shift > MAX_WORD
        characterord -= TOTAL_WORDS
    end
    characterord
end

def solve_cipher(input, shift_size = -3, circular_chars = false)
    decrypted_message = ''
    shift_size = adjust_shift shift_size
    sanitize_input(input).split(DELIMITER).each do |character|
        characterord = character.ord
        if (characterord == WHITE_SPACE_NUM)
            characterord = WHITE_SPACE_NUM + (shift_size * NEGATIVE)
        elsif circular_chars
            characterord = adjust_character characterord,
                                            characterord + shift_size
        end
        decrypted_message << (characterord + shift_size).chr
    end
    puts decrypted_message
end

solve_cipher('ifmmp', -1, true)
# should return 'hello'

solve_cipher('p| uhdo qdph lv grqdog gxfn')

solve_cipher('dmjicvxf', 5, true)
# should return 'ironhack'

solve_cipher('zwddg', -200, true)
# should return 'hello'

solve_cipher('khoor      khoor', -3, true)
# should return 'hello hello'

solve_cipher('aaaa', -1, true)
# should return 'zzzz'

solve_cipher('xxxx', 3, true)
# should return 'aaaa'

solve_cipher('u   y   c   i   o', 6, true)
# should return 'a e i o u'
