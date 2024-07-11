import * as React from 'react'
import { TouchableOpacity, Text, Platform } from 'react-native'
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'
import * as XLSX from 'xlsx'

export const writeDataAndDownloadExcelFile = async () => {
  try {
    // Sample data
    let sampleData = [
      { id: '1', name: 'first' },
      { id: '2', name: 'second' }
    ]

    // Create a new workbook
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(sampleData)
    XLSX.utils.book_append_sheet(wb, ws, 'Users')

    // Convert workbook to base64
    const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' })

    // Create a file name and URI
    const fileName = 'ExpenseIncomeDataFile.xlsx'
    const fileUri = FileSystem.documentDirectory + fileName

    // Write the base64 data to the file
    await FileSystem.writeAsStringAsync(fileUri, wbout, {
      encoding: FileSystem.EncodingType.Base64
    })
    console.log('FILE URI', fileUri)
    // Share the local file using Expo's Sharing module
    // await Sharing.shareAsync(fileUri, {
    //   mimeType:
    //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    //   dialogTitle: fileName,
    //   UTI: 'com.microsoft.excel.xlsx',
    //   filename: fileName
    // })
    const downloadResumable = FileSystem.createDownloadResumable(
      fileUri,
      FileSystem.documentDirectory + 'ExpenseIncomeDataFile.xlsx'
    )

    const { uri } = await downloadResumable.downloadAsync()

    console.log('Downloaded file to:', uri)

    // Save file to Media Library
    const asset = await MediaLibrary.createAssetAsync(uri)
    await MediaLibrary.createAlbumAsync('Download', asset, false)

    alert('File downloaded successfully!')
  } catch (error) {
    console.error('Error downloading or sharing file:', error)
  }
}

// const writeDataAndShareExcelFile = async () => {
//     try {
//       // Sample data
//       let sampleData = [
//         { id: '1', name: 'first' },
//         { id: '2', name: 'second' }
//       ]

//       // Create a new workbook
//       const wb = XLSX.utils.book_new()
//       const ws = XLSX.utils.json_to_sheet(sampleData)
//       XLSX.utils.book_append_sheet(wb, ws, 'Users')
//       const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' })

//       // Determine file path based on platform
//       let filePath = FileSystem.documentDirectory + 'ExpenseIncomeDataFile.xlsx'

//       // Download file to the file system
//       const { uri } = await FileSystem.downloadAsync(
//         `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${wbout}`,
//         filePath
//       )

//       // Log the URI for local access
//       console.log('File downloaded to:', uri)
//     } catch (error) {
//       console.error('Error downloading file:', error)
//     }
//   }
