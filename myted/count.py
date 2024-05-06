import json
from collections import defaultdict
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import re

def count_word_frequency(input_file, output_txt_file, output_word_json_file, output_txt_file_sorted, output_word_count_txt):
    word_count = defaultdict(int)
    word_numbers = defaultdict(set)  
    word_appearances = defaultdict(set)
    current_number = 0

    # 清空 word_count.txt 的内容
    open(output_word_count_txt, 'w').close()

    with open(input_file, 'r') as file:
        for line in file:
            line_parts = line.strip().split()
            word = " ".join(line_parts[:-1])
            number = int(line_parts[-1])

            if number != current_number:
                current_number = number
                current_unique_count = sum(1 for word_set in word_appearances.values() if len(word_set) > 0)
                with open(output_word_count_txt, 'a') as count_file:
                    count_file.write(f"{current_number-1} {current_unique_count}\n")

            if number not in word_numbers[word]:  
                word_count[word] += 1
                word_numbers[word].add(number)  
            word_appearances[word].add(number)
    
    for word in word_numbers:
        word_numbers[word] = sorted(word_numbers[word])

    current_unique_count = sum(1 for word_set in word_appearances.values() if len(word_set) > 0)
    with open(output_word_count_txt, 'a') as count_file:
        count_file.write(f"{current_number} {current_unique_count}\n")

    sorted_words = sorted(word_count.items(), key=lambda x: (-x[1], x[0]))

    with open(output_txt_file, 'w') as file_txt:
        for word, count in sorted_words:
            file_txt.write(word + " " + str(count) + "\n")

    word_data = []
    for word, count in word_count.items():
        word_entry = {
            "word": word,
            "count": count,
            "numbers": list(word_numbers[word])  
        }
        word_data.append(word_entry)

    word_data_sorted = sorted(word_data, key=lambda x: x["word"])

    with open(output_word_json_file, 'w') as file_word_json:
        json.dump(word_data_sorted, file_word_json, indent=4)

    all_words = list(word_count.keys())
    all_words.sort()

    with open(output_txt_file_sorted, 'w') as file_txt_sorted:
        file_txt_sorted.write('\n'.join(all_words) + '\n')

input_file = "input.txt"
output_txt_file = "output.txt"
output_word_json_file = "output_word.json"
output_txt_file_sorted = "output2.txt"
output_word_count_txt = "word_count.txt"

count_word_frequency(input_file, output_txt_file, output_word_json_file, output_txt_file_sorted, output_word_count_txt)

# 读取单词频率数据
words = []
with open('output.txt', 'r', encoding='utf-8') as file:
    for line in file:
        match = re.match(r'(.+?)\s+(\d+)', line)
        if match:
            word = match.group(1)
            freq = int(match.group(2))
            words.append((word, freq))

# 生成词云图
wordcloud = WordCloud(width=800, height=400, background_color='white').generate_from_frequencies(dict(words))

# 显示词云图
plt.figure(figsize=(10, 6))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')

# 保存词云图
wordcloud.to_file('./images/wordcloud.png')

plt.show()