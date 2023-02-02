import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
