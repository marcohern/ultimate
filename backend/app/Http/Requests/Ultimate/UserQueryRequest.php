<?php

namespace App\Http\Requests\Ultimate;

use Illuminate\Foundation\Http\FormRequest;

class UserQueryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'l' => 'integer|min:1',
            'o' => 'integer|min:0',
        ];
    }

    public function messages() {
        return [
            'l.integer' => 'l must be a positive integer',
            'l.min' => 'l must be greater than or equal to 1'
        ];
    }
}
