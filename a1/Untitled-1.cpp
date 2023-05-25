#include <iostream>
#include <vector>
using namespace std;

vector<int> rearrange_alternately(vector<int> &arr)
{
    int n = arr.size();
    int max_idx = n - 1;
    int min_idx = 0;
    int max_elem = arr[max_idx] + 1;
    for (int i = 0; i < n; i++)
    {
        if (i % 2 == 0)
        {
            arr[i] += (arr[max_idx] % max_elem) * max_elem;
            max_idx -= 1;
        }
        else
        {
            arr[i] += (arr[min_idx] % max_elem) * max_elem;
            min_idx += 1;
        }
    }
    for (int i = 0; i < n; i++)
    {
        arr[i] /= max_elem;
    }
    return arr;
}

int main()
{
    vector<int> arr = {1, 2, 3, 4, 5, 6};
    vector<int> result = rearrange_alternately(arr);
    for (int i = 0; i < result.size(); i++)
    {
        cout << result[i] << " ";
    }
    cout << endl;
    return 0;
}
