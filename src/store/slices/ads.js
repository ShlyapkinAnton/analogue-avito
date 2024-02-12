import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allAds: [],
  filterAds: {
    search: '',
    isActiveSearch: false,
    filterAdsArr: [],
  },
}

const adsSlice = createSlice({
  name: 'adsReducer',
  initialState,
  reducers: {
    setAllAds: (state, action) => {
      state.allAds = action.payload
    },
    setFilterAds: (state, action) => {
      const { search } = action.payload
      if (search?.length > 0) {
        state.filterAds.search = search
      } else {
        state.filterAds.search = ''
        state.filterAds.isActiveSearch = false
      }
      const getFilteredAds = () => {
        let filterArray = []
        filterArray = state.allAds

        if (state.filterAds.search.length > 0) {
          state.filterAds.isActiveSearch = true

          filterArray = filterArray.filter((item) =>
            item.title
              .toLocaleLowerCase()
              .includes(state.filterAds.search.toLocaleLowerCase())
          )
        }

        return filterArray
      }
      state.filterAds.filterAdsArr = getFilteredAds()  
    },
  },
})

export const { setAllAds, setFilterAds } = adsSlice.actions

export default adsSlice.reducer
