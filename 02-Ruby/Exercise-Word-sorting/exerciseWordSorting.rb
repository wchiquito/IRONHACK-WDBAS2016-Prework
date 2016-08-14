def sanitize_only_letters_a_whitespaces text
    text.gsub(/\s+/, ' ').gsub(/[^[:word:]\s]/, '')
end

def split_text text, delimiter
    text.split(delimiter)
end

def is_empty? text
    text.strip.size > 0
end

def sprint text
    if is_empty? text
        puts word_sorting(text).to_s
    end
end

def word_sorting text   
    split_text(sanitize_only_letters_a_whitespaces(text), ' ').sort { |elem1, elem2| elem1.upcase <=> elem2.upcase }
end

sprint 'Have a nice day.'
sprint 'Fools fall for foolish follies.'
sprint 'Ruby is a fun language!'
sprint '¿En   Ávila mañana      NO tendré        sueño?'
sprint '     '
