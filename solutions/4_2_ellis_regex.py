import re

# This pattern looks for the string "Ellis)" then finds the first two
# numbers after that.
#
# Notes:
#  1) We make sure to account for the left parenthesis which we see in the document.
#     If you are working with OCRed documents, you need to be careful and creative about
#     these types of symbols! Our document was created digitally, so we don't have that issue.
#  2) We use a variable number of whitespace \s characters with the + sign. This literally
#     means "one or more," because it isn't clear how many spaces are expected to be there,
#     and it may change between documents.
#  3) We use capturing groups with the parentheses to enclose the "number" patterns: (\d+).
#     This will let us extract the numbers with the `.groups()` method on the match object.
ellis_pattern = re.compile(r'Ellis\)\s+(\d+)\s+(\d+)')
m = ellis_pattern.search(text)
print(m.groups())
